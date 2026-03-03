export default function Home() {
  const logos = [
    { icon: "🍕", name: "Pizza Roma" },
    { icon: "☕", name: "Café Lumière" },
    { icon: "🍔", name: "Burger Street" },
    { icon: "🥐", name: "Boulangerie Paul" },
    { icon: "🍣", name: "Sushi Master" },
    { icon: "🥗", name: "Green Bowl" },
    { icon: "🍕", name: "Pizza Roma" },
    { icon: "☕", name: "Café Lumière" },
    { icon: "🍔", name: "Burger Street" },
    { icon: "🥐", name: "Boulangerie Paul" },
    { icon: "🍣", name: "Sushi Master" },
    { icon: "🥗", name: "Green Bowl" },
  ];

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <div className="nav-logo-icon">A</div>
          AvisBoost
        </a>
        <div className="nav-links">
          <a href="#features" className="nav-link">Fonctionnalités</a>
          <a href="#testimonials" className="nav-link">Témoignages</a>
          <a href="#pricing" className="nav-link">Tarifs</a>
        </div>
        <div className="nav-spacer" />
        <a href="#pricing" className="nav-cta">Commencer ↗</a>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-content">
          <div className="badge" style={{ marginBottom: 24 }}>
            ✨ Nouveau · Gamification intelligente
          </div>

          <h1 className="hero-title heading-display">
            Récoltez des avis<br />
            Google. <span className="text-orange">Automatiquement.</span>
          </h1>

          <p className="hero-subtitle">
            Transformez chaque client en ambassadeur grâce à notre roulette
            interactive. Ils jouent, laissent un avis, et reviennent.
          </p>

          <div className="hero-checks">
            <div className="hero-check">
              <div className="hero-check-icon">✓</div>
              Personnalisable
            </div>
            <div className="hero-check">
              <div className="hero-check-icon">✓</div>
              +340% d&apos;avis
            </div>
            <div className="hero-check">
              <div className="hero-check-icon">✓</div>
              30€/mois
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#pricing" className="btn-primary">
              Commencer maintenant ↗
            </a>
            <a href="#how" className="btn-outline">
              Voir la démo ↗
            </a>
          </div>

          <div className="social-proof">
            <p className="social-proof-text">
              Rejoint par +4 000 commerces en France
            </p>
            <div className="logos-marquee">
              <div className="logos-track">
                {logos.map((l, i) => (
                  <div key={i} className="logo-item">
                    <div className="logo-dot">{l.icon}</div>
                    {l.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value heading-display">+340<span className="text-orange">%</span></div>
            <div className="stat-label">d&apos;avis Google en moyenne</div>
          </div>
          <div className="stat-item">
            <div className="stat-value heading-display">92<span className="text-orange">%</span></div>
            <div className="stat-label">des clients jouent</div>
          </div>
          <div className="stat-item">
            <div className="stat-value heading-display">4.9<span className="text-orange">/5</span></div>
            <div className="stat-label">satisfaction client</div>
          </div>
          <div className="stat-item">
            <div className="stat-value heading-display">30<span className="text-orange">€</span></div>
            <div className="stat-label">par mois seulement</div>
          </div>
        </div>
      </section>

      {/* ─── COMMENT ÇA FONCTIONNE ─── */}
      <section className="how-section" id="how">
        <div className="container">
          <div className="section-header">
            <div className="badge">⚡ Comment ça fonctionne</div>
            <h2 className="section-title heading-display">
              Simple et <span className="text-orange">efficace.</span>
            </h2>
            <p className="section-subtitle">
              Un système en 4 étapes qui transforme chaque visite en avis Google.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <div className="step-icon">📱</div>
              <h3 className="step-title">Scan du QR Code</h3>
              <p className="step-desc">
                Un QR code sur table ou au comptoir renvoie vers votre page
                de jeu personnalisée.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <div className="step-icon">⭐</div>
              <h3 className="step-title">Avis Google</h3>
              <p className="step-desc">
                Le client est invité à laisser un avis Google avant
                de pouvoir jouer.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <div className="step-icon">🎰</div>
              <h3 className="step-title">Roulette interactive</h3>
              <p className="step-desc">
                La roulette s&apos;affiche avec des lots attractifs.
                Le client tente sa chance.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">04</div>
              <div className="step-icon">🔥</div>
              <h3 className="step-title">Résultats</h3>
              <p className="step-desc">
                Votre note Google monte, votre visibilité explose et
                vos clients reviennent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS (left + right layout) ─── */}
      <section className="benefits-section" id="benefits">
        <div className="container">
          <div className="benefits-layout">
            <div className="benefits-left">
              <div className="badge">💎 Avantages</div>
              <h2 className="benefits-left-title heading-display">
                Débloquez une nouvelle ère de{" "}
                <span className="text-orange">croissance</span>
              </h2>
              <p className="benefits-left-desc">
                Maximisez votre visibilité locale grâce à notre solution
                de gamification avancée et nos outils optimisés.
              </p>
              <div className="benefits-tags">
                <span className="benefit-tag">Sécurisé</span>
                <span className="benefit-tag">Personnalisable</span>
                <span className="benefit-tag">Accessible</span>
                <span className="benefit-tag">Automatisé</span>
                <span className="benefit-tag">Données centralisées</span>
              </div>
            </div>

            <div className="benefits-right">
              <div className="benefit-item">
                <div className="benefit-item-header">
                  <div className="benefit-item-icon">🎯</div>
                  <h3 className="benefit-item-title">Conversion maximale</h3>
                </div>
                <p className="benefit-item-desc">
                  92% des clients qui scannent le QR code laissent un avis.
                  Le jeu les motive naturellement à participer.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item-header">
                  <div className="benefit-item-icon">📈</div>
                  <h3 className="benefit-item-title">SEO local boosté</h3>
                </div>
                <p className="benefit-item-desc">
                  Plus d&apos;avis = meilleur classement local = plus de
                  nouveaux clients chaque jour.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item-header">
                  <div className="benefit-item-icon">💰</div>
                  <h3 className="benefit-item-title">Coût maîtrisé</h3>
                </div>
                <p className="benefit-item-desc">
                  Seuls 30% gagnent un café offert. Vous ne
                  distribuez que ce qui est rentable pour vous.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-item-header">
                  <div className="benefit-item-icon">🔄</div>
                  <h3 className="benefit-item-title">Fidélisation naturelle</h3>
                </div>
                <p className="benefit-item-desc">
                  Le côté ludique crée une connexion émotionnelle et incite
                  les clients à revenir régulièrement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID (6 cards) ─── */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <div className="badge">🚀 Fonctionnalités</div>
            <h2 className="section-title heading-display">
              Des fonctionnalités qui font{" "}
              <span className="text-orange">la différence</span>
            </h2>
            <p className="section-subtitle">
              Tout ce dont vous avez besoin pour transformer l&apos;expérience client.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Page personnalisée</h3>
              <p className="feature-desc">
                Couleurs, logo, lots — tout est adapté à votre enseigne.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Analytics avancés</h3>
              <p className="feature-desc">
                Suivez le nombre d&apos;avis, de joueurs et de gains en temps réel.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3 className="feature-title">Intégration fluide</h3>
              <p className="feature-desc">
                Un simple QR code suffit. Aucune installation requise.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3 className="feature-title">Probabilités réglables</h3>
              <p className="feature-desc">
                Contrôlez exactement le pourcentage de gains distribués.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">100% Mobile</h3>
              <p className="feature-desc">
                Optimisé pour les smartphones de vos clients.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Sécurité avancée</h3>
              <p className="feature-desc">
                Protection anti-triche et données sécurisées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6 TESTIMONIALS ─── */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="badge">⭐ Témoignages</div>
            <h2 className="section-title heading-display">
              Ce que disent <span className="text-orange">nos clients.</span>
            </h2>
            <p className="section-subtitle">
              Découvrez comment AvisBoost transforme la visibilité de nos partenaires.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;En 2 mois, on est passé de 45 à 230 avis Google. Nos clients
                adorent le concept de la roulette, c&apos;est devenu un vrai rituel !&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍🍳</div>
                <div>
                  <div className="testimonial-name">Marco Rossi</div>
                  <div className="testimonial-role">Gérant · Pizza Roma, Paris</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Le retour sur investissement est incroyable. 30€/mois pour
                tripler mes avis ? Je recommande à tous les restaurateurs.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👩‍💼</div>
                <div>
                  <div className="testimonial-name">Sophie Martin</div>
                  <div className="testimonial-role">Propriétaire · Café Lumière, Lyon</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Mes clients reviennent exprès pour rejouer. C&apos;est la meilleure
                stratégie de fidélisation qu&apos;on ait jamais testée.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍🍳</div>
                <div>
                  <div className="testimonial-name">Karim Benali</div>
                  <div className="testimonial-role">Chef · Le Petit Bistro, Marseille</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Notre note Google est passée de 3.8 à 4.7 en 3 mois.
                Les nouveaux clients nous disent qu&apos;ils nous ont trouvés grâce aux avis.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👩‍🍳</div>
                <div>
                  <div className="testimonial-name">Claire Dubois</div>
                  <div className="testimonial-role">Gérante · Brasserie du Parc, Bordeaux</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Installation en 5 minutes, résultats dès la première semaine.
                La simplicité du système est un vrai plus pour mon équipe.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍💼</div>
                <div>
                  <div className="testimonial-name">Thomas Faure</div>
                  <div className="testimonial-role">Directeur · Sushi Master, Toulouse</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;On a doublé notre fréquentation le week-end.
                Les clients partagent même leurs gains sur Instagram !&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👩‍🍳</div>
                <div>
                  <div className="testimonial-name">Léa Moreau</div>
                  <div className="testimonial-role">Co-fondatrice · Green Bowl, Nantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <div className="badge">💳 Tarifs</div>
            <h2 className="section-title heading-display">
              Un prix simple, <span className="text-orange">transparent.</span>
            </h2>
            <p className="section-subtitle">
              Tout inclus. Sans engagement ni frais cachés.
            </p>
          </div>

          <div className="pricing-card">
            <div className="pricing-popular-tag">🔥 Populaire</div>
            <div className="pricing-body">
              <h3 className="pricing-name">Pack AvisBoost Pro</h3>
              <p className="pricing-tagline">Pour restaurants, cafés et commerces</p>
              <div className="pricing-price">
                <span className="pricing-amount heading-display">30€</span>
                <span className="pricing-period">/mois</span>
              </div>
              <p className="pricing-subtitle">
                Sans engagement · Annulable à tout moment
              </p>

              <ul className="pricing-features">
                <li><span className="pricing-check">✓</span>Page de jeu personnalisée à votre enseigne</li>
                <li><span className="pricing-check">✓</span>Roulette interactive ultra-engageante</li>
                <li><span className="pricing-check">✓</span>Redirection automatique vers vos avis Google</li>
                <li><span className="pricing-check">✓</span>QR Code prêt à imprimer</li>
                <li><span className="pricing-check">✓</span>Probabilités de gain personnalisables</li>
                <li><span className="pricing-check">✓</span>Support prioritaire 7j/7</li>
              </ul>

              <button className="pricing-cta">Démarrer maintenant ↗</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <p>© 2026 AvisBoost — Tous droits réservés</p>
      </footer>
    </>
  );
}
