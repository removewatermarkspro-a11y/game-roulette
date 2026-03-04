"use client";

import React, { useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

// ─── Segment Config ─────────────────────────────────────────────
interface Segment {
    label: string;
    emoji: string;
    color1: string;
    color2: string;
}

const SEGMENTS: Segment[] = [
    { label: "Free Drink", emoji: "🍹", color1: "#10b981", color2: "#059669" },
    { label: "Perdu", emoji: "😢", color1: "#e74c3c", color2: "#c0392b" },
    { label: "Free Drink", emoji: "🍹", color1: "#0ea5e9", color2: "#0284c7" },
    { label: "Perdu", emoji: "😢", color1: "#f39c12", color2: "#e67e22" },
    { label: "Free Drink", emoji: "🍹", color1: "#22c55e", color2: "#16a34a" },
    { label: "Perdu", emoji: "😢", color1: "#8b5cf6", color2: "#7c3aed" },
    { label: "Free Drink", emoji: "🍹", color1: "#06b6d4", color2: "#0891b2" },
    { label: "Perdu", emoji: "😢", color1: "#ec4899", color2: "#db2777" },
];

const SEGMENT_ANGLE = 360 / SEGMENTS.length;

// Win segments: Free Drink indices (0, 2, 4, 6) — but only 5% chance
const WIN_INDICES = [0, 2, 4, 6];
const LOSE_INDICES = [1, 3, 5, 7];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
        x: Math.round((cx + r * Math.cos(rad)) * 100) / 100,
        y: Math.round((cy + r * Math.sin(rad)) * 100) / 100,
    };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArc = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

function launchConfetti() {
    const colors = ["#ff5c00", "#ff7a2e", "#ffa366", "#22c55e", "#3b82f6", "#f59e0b", "#ec4899"];
    for (let i = 0; i < 80; i++) {
        const el = document.createElement("div");
        el.className = "confetti-piece";
        el.style.left = `${50 + (Math.random() - 0.5) * 60}%`;
        el.style.top = "50%";
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        el.style.width = `${6 + Math.random() * 8}px`;
        el.style.height = `${6 + Math.random() * 8}px`;
        document.body.appendChild(el);
        const angle = Math.random() * Math.PI * 2;
        const velocity = 250 + Math.random() * 500;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity - 400;
        el.animate(
            [
                { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
                { transform: `translate(${dx}px, ${dy + 700}px) rotate(${360 + Math.random() * 720}deg)`, opacity: 0 },
            ],
            { duration: 1800 + Math.random() * 1200, easing: "cubic-bezier(0.25,0.46,0.45,0.94)" }
        );
        setTimeout(() => el.remove(), 3500);
    }
}

interface RouletteGameProps {
    restoName: string;
}

export default function RouletteGame({ restoName }: RouletteGameProps) {
    const [phase, setPhase] = useState<"start" | "loading" | "ready" | "spinning" | "done">("start");
    const [rotation, setRotation] = useState(0);
    const [result, setResult] = useState<{ segment: Segment; isWin: boolean } | null>(null);
    const [countdown, setCountdown] = useState(5);
    const [mounted, setMounted] = useState(false);
    const hasSpunRef = useRef(false);

    // For portal rendering of the result overlay
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const REVIEW_URL =
        "https://www.google.com/search?sca_esv=15c87dc32e9c6f01&cs=0&sxsrf=ANbL-n6UVwERM6q_Tsd-m7vxoecCwGx9Zw:1772577181457&q=les+fr%C3%A8res+laumi%C3%A8re+avis&ludocid=3419751808242785220&ibp=gwp;0,7&hl=fr-FR&sa=X&ved=2ahUKEwjZnvPJ5ISTAxXxAvsDHXaiBd4Q9fQKegQIKhAG&biw=390&bih=669&dpr=3#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D";
    const displayName = restoName
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const handleStart = useCallback(() => {
        window.open(REVIEW_URL, "_blank");
        setPhase("loading");
        let count = 5;
        setCountdown(count);
        const interval = setInterval(() => {
            count--;
            setCountdown(count);
            if (count <= 0) {
                clearInterval(interval);
                setPhase("ready");
            }
        }, 1000);
    }, []);

    const handleSpin = useCallback(() => {
        if (hasSpunRef.current) return;
        hasSpunRef.current = true;
        setPhase("spinning");

        // 80% lose, 20% win (Free Drink)
        const rand = Math.random();
        const isWin = rand < 0.20;
        const targetIndex = isWin
            ? WIN_INDICES[Math.floor(Math.random() * WIN_INDICES.length)]
            : LOSE_INDICES[Math.floor(Math.random() * LOSE_INDICES.length)];

        const segmentMiddle = targetIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
        const targetAngle = 360 - segmentMiddle;
        const fullSpins = 6 + Math.floor(Math.random() * 3);
        const totalRotation = rotation + fullSpins * 360 + ((targetAngle - (rotation % 360)) + 360) % 360;

        setRotation(totalRotation);

        setTimeout(() => {
            setPhase("done");
            const isActualWin = WIN_INDICES.includes(targetIndex);
            setResult({ segment: SEGMENTS[targetIndex], isWin: isActualWin });
            if (isActualWin) launchConfetti();
        }, 4500);
    }, [rotation]);

    const cx = 600, cy = 600, r = 600;

    // ─── Result overlay (rendered via portal to avoid stacking context issues) ───
    const resultOverlay = result && phase === "done" && mounted
        ? createPortal(
            <div className="result-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="result-card">
                    <div className="result-icon">{result.isWin ? "🎉" : "😔"}</div>
                    <h2 className={`result-title heading-display ${result.isWin ? "win" : "lose"}`}>
                        {result.isWin ? "Félicitations !" : "Pas de chance..."}
                    </h2>
                    <p className="result-desc">
                        {result.isWin
                            ? `Vous avez gagné un Free Drink ! 🍹 Montrez cet écran au comptoir.`
                            : `Dommage, ce n'est pas pour cette fois ! 😢 Merci pour votre avis Google !`}
                    </p>
                    {result.isWin && (
                        <div className="result-win-badge">
                            🎁 {result.segment.emoji} {result.segment.label} offert !
                        </div>
                    )}
                </div>
            </div>,
            document.body
        )
        : null;

    // ─── START SCREEN ───
    if (phase === "start") {
        return (
            <div className="roulette-start">
                <div className="hero-blob" style={{ width: 600, height: 400, background: "linear-gradient(135deg, #ffd6b0, #ffbd80, #ffa856)", top: -150, left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} />
                <div className="hero-blob" style={{ width: 350, height: 350, background: "linear-gradient(135deg, #f3e8ff, #ede9fe)", bottom: -100, right: -80, opacity: 0.5 }} />

                <div style={{ marginBottom: 20, fontSize: 52, animation: "float 3s ease-in-out infinite", position: "relative", zIndex: 2 }}>
                    🎰
                </div>
                <h1 className="roulette-start-title heading-display">
                    <span className="text-orange">{displayName}</span> vous<br />
                    offre des cadeaux !
                </h1>
                <p className="roulette-start-subtitle">
                    Laissez un avis Google puis tournez la roulette pour tenter de remporter un lot exclusif !
                </p>
                <button className="roulette-start-btn" onClick={handleStart}>
                    Commencer à jouer ↗
                </button>
            </div>
        );
    }

    // ─── LOADING SCREEN ───
    if (phase === "loading") {
        return (
            <div className="roulette-start">
                <div className="hero-blob" style={{ width: 500, height: 400, background: "linear-gradient(135deg, #ebf5ff, #dbeafe)", top: -150, left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} />

                <div style={{ fontSize: 52, marginBottom: 20, animation: "float 2s ease-in-out infinite", position: "relative", zIndex: 2 }}>
                    ⭐
                </div>
                <h1 className="roulette-start-title heading-display">
                    Merci pour votre <span className="text-orange">avis !</span>
                </h1>
                <p className="roulette-start-subtitle">
                    Préparez-vous à tourner la roulette...
                </p>
                <div className="countdown-ring">
                    <div className="countdown-number">{countdown}</div>
                </div>
            </div>
        );
    }

    // ─── WHEEL SCREEN (half-wheel at bottom) ───
    return (
        <>
            <div className="roulette-page">
                {/* Content above wheel */}
                <div className="roulette-top-content">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', gap: '8px' }}>
                        <span style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Propulsé par</span>
                        <img src="/logo.png" alt="Luckyscan logo" style={{ height: '48px', objectFit: 'contain' }} />
                    </div>
                    <h2 className="roulette-page-title heading-display">
                        Tournez la <span className="text-orange">roue !</span>
                    </h2>
                    <p className="roulette-page-subtitle">Tentez votre chance et gagnez un lot</p>
                    {phase === "ready" && (
                        <div style={{ position: 'relative', zIndex: 10, margin: '20px 0 80px 0' }}>
                            <button className="roulette-spin-topbtn" onClick={handleSpin}>
                                🎰 TOURNER
                            </button>
                        </div>
                    )}
                    {phase === "spinning" && (
                        <div style={{ fontSize: 15, color: "#999", fontWeight: 500, animation: "fadeIn 0.3s ease" }}>
                            La roue tourne...
                        </div>
                    )}
                </div>

                {/* Half-wheel at bottom */}
                <div className="roulette-bottom-wrapper">
                    <div className="roulette-outer-glow" />
                    <div className="roulette-wheel-container">
                        <div className="roulette-border-ring" />
                        <div className="roulette-border-inner" />
                        <div className="roulette-pointer" />

                        <svg
                            className="roulette-svg"
                            viewBox={`0 0 ${cx * 2} ${cy * 2}`}
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transition: phase === "spinning"
                                    ? "transform 4.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                                    : "none",
                            }}
                        >
                            <defs>
                                {SEGMENTS.map((seg, i) => (
                                    <linearGradient key={`grad-${i}`} id={`seg-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={seg.color1} />
                                        <stop offset="100%" stopColor={seg.color2} />
                                    </linearGradient>
                                ))}
                            </defs>
                            {SEGMENTS.map((seg, i) => {
                                const startAngle = i * SEGMENT_ANGLE;
                                const endAngle = startAngle + SEGMENT_ANGLE;
                                const midAngle = startAngle + SEGMENT_ANGLE / 2;
                                const emojiPos = polarToCartesian(cx, cy, r * 0.75, midAngle);
                                const labelPos = polarToCartesian(cx, cy, r * 0.52, midAngle);
                                return (
                                    <g key={i}>
                                        <path d={describeArc(cx, cy, r, startAngle, endAngle)} fill={`url(#seg-grad-${i})`} stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
                                        <text x={emojiPos.x} y={emojiPos.y} textAnchor="middle" dominantBaseline="central" fontSize="54" transform={`rotate(${midAngle},${emojiPos.x},${emojiPos.y})`}>{seg.emoji}</text>
                                        <text
                                            x={labelPos.x}
                                            y={labelPos.y}
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            fontSize="30"
                                            fontWeight="800"
                                            fill="#fff"
                                            transform={`rotate(${midAngle},${labelPos.x},${labelPos.y})`}
                                            style={{
                                                fontFamily: "var(--font-body), sans-serif",
                                                textShadow: "0 3px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {seg.label}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>

                        <div className="roulette-center-hub">🎰</div>
                    </div>
                </div>
            </div>

            {/* Result overlay rendered via portal to document.body — avoids stacking context bugs */}
            {resultOverlay}
        </>
    );
}
