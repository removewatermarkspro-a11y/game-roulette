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

        {/* Floating review cards — clustered near heading */}
        <div className="hero-float-card float-pos-l1">
          <div className="float-card-inner float-card-lg">
            <div className="float-card-stars">★★★★★</div>
            <p className="float-card-review">
              &ldquo;De 38 à 210 avis Google en 6 semaines. ROI immédiat.&rdquo;
            </p>
            <div className="float-card-author">
              <img src="/avatars/marco.png" alt="Marco Rossi" className="float-card-avatar float-card-avatar-photo" />
              <div>
                <div className="float-card-name">Marco Rossi</div>
                <div className="float-card-role">Osteria Roma, Paris 11e</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-float-card float-pos-r1">
          <div className="float-card-inner float-card-md">
            <div className="float-card-stars">★★★★★</div>
            <p className="float-card-review">
              &ldquo;Note Google passée de 3.9 à 4.8 en 3 mois.&rdquo;
            </p>
            <div className="float-card-author">
              <img src="/avatars/sarah.png" alt="Sarah Klein" className="float-card-avatar float-card-avatar-photo" />
              <div>
                <div className="float-card-name">Sarah Klein</div>
                <div className="float-card-role">Brasserie du Lac, Lyon</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-float-card float-pos-r2">
          <div className="float-card-inner float-card-sm">
            <div className="float-card-stars">★★★★★</div>
            <p className="float-card-review">
              &ldquo;Mes équipes adorent, mes clients aussi.&rdquo;
            </p>
            <div className="float-card-author">
              <img src="/avatars/lea.png" alt="Léa Moreau" className="float-card-avatar float-card-avatar-photo" />
              <div>
                <div className="float-card-name">Léa Moreau</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-social-proof">
            <div className="hero-sp-avatars">
              <img src="/avatars/marco.png" alt="Marco" className="hero-sp-avatar hero-sp-avatar-photo" />
              <img src="/avatars/sarah.png" alt="Sarah" className="hero-sp-avatar hero-sp-avatar-photo" />
              <img src="/avatars/karim.png" alt="Karim" className="hero-sp-avatar hero-sp-avatar-photo" />
              <img src="/avatars/claire.png" alt="Claire" className="hero-sp-avatar hero-sp-avatar-photo" />
            </div>
            <div className="hero-sp-text">
              <div className="hero-sp-stars">★★★★★</div>
              <div className="hero-sp-label">+100 restaurateurs déjà conquis</div>
            </div>
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
              Des centaines de restaurateurs déjà conquis
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
      </section >

      {/* ─── STATS ─── */}
      < section className="stats-section" >
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
      </section >

      {/* ─── COMMENT ÇA FONCTIONNE ─── */}
      < section className="how-section" id="how" >
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
      </section >

      {/* ─── BENEFITS (left + right layout) ─── */}
      < section className="benefits-section" id="benefits" >
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
      </section >

      {/* ─── FEATURES GRID (6 cards) ─── */}
      < section className="features-section" id="features" >
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
      </section >

      {/* ─── 6 TESTIMONIALS ─── */}
      < section className="testimonials-section" id="testimonials" >
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
                &ldquo;En 8 semaines, on est passé de 42 à 218 avis Google. Notre classement local a littéralement décollé — on apparaît maintenant en premier sur notre quartier.&rdquo;
              </p>
              <div className="testimonial-author">
                <img src="/avatars/marco.png" alt="Marco Rossi" className="testimonial-avatar testimonial-avatar-photo" />
                <div>
                  <div className="testimonial-name">Marco Rossi</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;30€/mois, et mes avis ont triplé en 2 mois. Le calcul est vite fait. J&apos;aurais dû adopter ça bien plus tôt.&rdquo;
              </p>
              <div className="testimonial-author">
                <img src="/avatars/sarah.png" alt="Sarah Klein" className="testimonial-avatar testimonial-avatar-photo" />
                <div>
                  <div className="testimonial-name">Sarah Klein</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Mise en place en moins de 10 minutes. Dès la première semaine, mes serveurs m&apos;ont signalé qu&apos;ils voyaient les clients scanner le QR code d&apos;eux-mêmes.&rdquo;
              </p>
              <div className="testimonial-author">
                <img src="/avatars/karim.png" alt="Karim Benali" className="testimonial-avatar testimonial-avatar-photo" />
                <div>
                  <div className="testimonial-name">Karim Benali</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Notre note est passée de 3.8 à 4.7. De nouveaux clients nous disent régulièrement qu&apos;ils nous ont choisis grâce à nos avis. C&apos;est concret.&rdquo;
              </p>
              <div className="testimonial-author">
                <img src="/avatars/claire.png" alt="Claire Dubois" className="testimonial-avatar testimonial-avatar-photo" />
                <div>
                  <div className="testimonial-name">Claire Dubois</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Outil simple, impact immédiat. Mon équipe n&apos;a rien eu à apprendre. Les clients jouent naturellement et laissent leur avis sans qu&apos;on le leur demande.&rdquo;
              </p>
              <div className="testimonial-author">
                <img src="/avatars/thomas.png" alt="Thomas Faure" className="testimonial-avatar testimonial-avatar-photo" />
                <div>
                  <div className="testimonial-name">Thomas Faure</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;On a vu +40% de fréquentation le week-end en 1 mois. Les clients parlent de la roulette entre eux, ça crée un vrai bouche-à-oreille digital.&rdquo;
              </p>
              <div className="testimonial-author">
                <img src="/avatars/lea.png" alt="Léa Moreau" className="testimonial-avatar testimonial-avatar-photo" />
                <div>
                  <div className="testimonial-name">Léa Moreau</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ─── PRICING ─── */}
      < section className="pricing-section" id="pricing" >
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
      </section >

      {/* ─── FOOTER ─── */}
      < footer className="footer" >
        <p>© 2026 AvisBoost — Tous droits réservés</p>
      </footer >
    </>
  );
}
