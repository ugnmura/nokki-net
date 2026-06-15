export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="hero-art">
          <img
            src="/image.webp"
            alt="ノッキの森のオリジナルイラスト — 絵本作品"
            className="hero-art-img"
            width={8000}
            height={4800}
          />
          <svg
            className="hero-art-overlay"
            viewBox="0 0 520 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              points="20,10 200,40 240,180 140,280 10,240 0,100"
              stroke="#ABA87C"
              strokeWidth="0.7"
              fill="none"
              opacity="0.35"
            />
            <polygon
              points="360,300 500,320 510,440 390,510 330,470 320,360"
              stroke="#C89070"
              strokeWidth="0.7"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="hero-content">
          <p className="hero-label">クリエイティブスタジオ ・ 日本 / 欧州</p>
          <h1 className="hero-title">ノッキの森</h1>
          <p className="hero-jp">NOKKI NO MORI</p>
          <p className="hero-tagline">
            日本と欧州を、ビジュアルで結ぶ。<br />
            絵本、デジタルイラスト、自費出版、3Dデザイン。
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item">松村 証</div>
            <div className="hero-meta-item">千葉県 流山市 ・ 日本</div>
            <div className="hero-meta-item">2026年 Q2 開業</div>
          </div>
        </div>
      </section>

      <section id="about" className="summary">
        <div className="section-header">
          <span className="section-label">事業概要</span>
          <div className="section-rule" />
          <span className="section-num">01</span>
        </div>
        <h2 className="section-title">プロフィール</h2>
        <div className="summary-grid">
          <div className="summary-row">
            <span className="summary-key">事業形態</span>
            <div className="summary-dash" />
            <span className="summary-val">個人事業主</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">事業内容</span>
            <div className="summary-dash" />
            <span className="summary-val">デジタルイラスト ・ 自費出版 ・ 3Dデザイン</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">プロフィール</span>
            <div className="summary-dash" />
            <span className="summary-val">日本と欧州を結ぶ国際クリエイティブスタジオ</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">対象顧客</span>
            <div className="summary-dash" />
            <span className="summary-val">バイリンガル家庭、出版社、エージェンシー、教育機関</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">所在地</span>
            <div className="summary-dash" />
            <span className="summary-val">千葉県 流山市</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">開業時期</span>
            <div className="summary-dash" />
            <span className="summary-val">2026年 Q2</span>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="section-header">
          <span className="section-label">作品集 / Portfolio</span>
          <div className="section-rule" />
          <span className="section-num">02</span>
        </div>
        <h2 className="section-title">作品集</h2>
        <p className="section-sub">NOKKI NO MORI による創作物</p>
        <div className="works-grid">
          <div className="works-item">
            <img src="/image.webp" alt="NOKKI NO MORI 作品" width={8000} height={4800} loading="lazy" />
          </div>
          <div className="works-item">
            <img src="/image2.webp" alt="NOKKI NO MORI 作品" loading="lazy" />
          </div>
          <div className="works-item">
            <img src="/image3.webp" alt="NOKKI NO MORI 作品" width={8000} height={4800} loading="lazy" />
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="section-header">
          <span className="section-label">価格 / Pricing</span>
          <div className="section-rule" />
          <span className="section-num">03</span>
        </div>
        <h2 className="section-title">価格</h2>
        <p className="section-sub">Amazon KDP・直接受注・オンラインプラットフォームを通じた収益</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <p className="pricing-card-label">Children&apos;s Books</p>
            <h3 className="pricing-card-name">絵本</h3>
            <div className="pricing-accent" />
            <p className="pricing-range">¥1,500 〜 ¥2,500 <span className="pricing-unit">/ 冊</span></p>
          </div>
          <div className="pricing-card">
            <p className="pricing-card-label">Illustration · B2B</p>
            <h3 className="pricing-card-name">イラスト制作</h3>
            <div className="pricing-accent" />
            <p className="pricing-range">¥50,000 〜 ¥150,000 <span className="pricing-unit">/ 案件</span></p>
          </div>
          <div className="pricing-card">
            <p className="pricing-card-label">3D Figures</p>
            <h3 className="pricing-card-name">3Dフィギュア</h3>
            <div className="pricing-accent" />
            <p className="pricing-range">¥8,000 〜 ¥20,000 <span className="pricing-unit">/ 点</span></p>
          </div>
        </div>
      </section>

      <section id="infrastructure">
        <div className="section-header">
          <span className="section-label">制作体制</span>
          <div className="section-rule" />
          <span className="section-num">04</span>
        </div>
        <h2 className="section-title">スタジオ設備</h2>
        <div className="infra-grid">
          <div className="infra-card">
            <svg className="infra-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect x="4" y="6" width="28" height="20" rx="2" stroke="#ABA87C" strokeWidth="1.2" />
              <rect x="10" y="29" width="16" height="1.5" rx="0.75" fill="#ABA87C" />
              <circle cx="26" cy="16" r="2" stroke="#C89070" strokeWidth="1" />
              <line x1="8" y1="16" x2="20" y2="16" stroke="#ABA87C" strokeWidth="1" opacity="0.5" />
              <line x1="8" y1="12" x2="16" y2="12" stroke="#ABA87C" strokeWidth="1" opacity="0.4" />
              <line x1="8" y1="20" x2="14" y2="20" stroke="#ABA87C" strokeWidth="1" opacity="0.4" />
            </svg>
            <h3 className="infra-card-title">ハードウェア</h3>
            <p className="infra-card-body">
              iPad Pro と Apple Pencil による精密で表現力豊かなイラストレーション。あらゆるスケールで高品質なデジタルアートを実現します。
            </p>
          </div>
          <div className="infra-card">
            <svg className="infra-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect x="6" y="8" width="24" height="20" rx="2" stroke="#ABA87C" strokeWidth="1.2" />
              <path d="M12 22 L18 14 L24 22" stroke="#C89070" strokeWidth="1.2" fill="none" />
              <circle cx="18" cy="12" r="1.5" fill="#C89070" />
            </svg>
            <h3 className="infra-card-title">ソフトウェア</h3>
            <p className="infra-card-body">
              Procreate と Adobe Creative Cloud によるプロフェッショナルな制作環境。ラフスケッチから印刷データまで一貫して対応します。
            </p>
          </div>
          <div className="infra-card">
            <svg className="infra-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect x="10" y="16" width="16" height="14" rx="1" stroke="#ABA87C" strokeWidth="1.2" />
              <path d="M10 19 H6 V28 H10" stroke="#ABA87C" strokeWidth="1" opacity="0.5" />
              <path d="M26 19 H30 V28 H26" stroke="#ABA87C" strokeWidth="1" opacity="0.5" />
              <rect x="14" y="8" width="8" height="8" rx="1" stroke="#C89070" strokeWidth="1" />
              <line x1="18" y1="8" x2="18" y2="16" stroke="#C89070" strokeWidth="1" opacity="0.5" />
            </svg>
            <h3 className="infra-card-title">製造</h3>
            <p className="infra-card-body">
              Bambu Lab の3Dプリンターで、オリジナルフィギュアやコレクタブルアイテムの試作と少量生産を行います。
            </p>
          </div>
          <div className="infra-card">
            <svg className="infra-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect x="6" y="10" width="16" height="20" rx="1" stroke="#ABA87C" strokeWidth="1.2" />
              <rect x="10" y="7" width="16" height="20" rx="1" stroke="#ABA87C" strokeWidth="1" opacity="0.5" />
              <line x1="10" y1="17" x2="18" y2="17" stroke="#C89070" strokeWidth="1" />
              <line x1="10" y1="21" x2="16" y2="21" stroke="#ABA87C" strokeWidth="1" opacity="0.5" />
              <line x1="10" y1="24" x2="17" y2="24" stroke="#ABA87C" strokeWidth="1" opacity="0.5" />
            </svg>
            <h3 className="infra-card-title">出版・流通</h3>
            <p className="infra-card-body">
              Amazon KDP と国際的なデジタルプラットフォームを通じて、日本と欧州市場へスケーラブルに出版・流通します。
            </p>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="section-header">
          <span className="section-label">ロードマップ</span>
          <div className="section-rule" />
          <span className="section-num">05</span>
        </div>
        <h2 className="section-title">事業計画</h2>
        <div className="roadmap-timeline">
          <div className="roadmap-item">
            <div className="roadmap-marker" />
            <p className="roadmap-quarter">2026年 Q2</p>
            <h4 className="roadmap-title">正式開業</h4>
            <p className="roadmap-body">事業登録、口座開設、スタジオ稼働開始。</p>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-marker" />
            <p className="roadmap-quarter">2027年 Q1</p>
            <h4 className="roadmap-title">絵本デビュー作</h4>
            <p className="roadmap-body">Amazon KDP にて、初の絵本作品を出版。</p>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-marker" />
            <p className="roadmap-quarter">2027年 Q4</p>
            <h4 className="roadmap-title">3Dプロダクト展開</h4>
            <p className="roadmap-body">オリジナル3Dフィギュアラインを商業流通へ拡大。</p>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-marker" />
            <p className="roadmap-quarter">2028年 Q2</p>
            <h4 className="roadmap-title">国際展開</h4>
            <p className="roadmap-body">確立された流通網を通じ、欧州と日本での越境販売を本格化。</p>
          </div>
        </div>
      </section>

      <div className="image-break">
        <img
          src="/image3.webp"
          alt="山小屋から市場の屋台を覗くキャラクター"
          width={8000}
          height={4800}
          loading="lazy"
        />
      </div>

      <section id="contact" className="contact">
        <div>
          <div className="section-header">
            <span className="section-label">お問い合わせ</span>
            <div className="section-rule" />
            <span className="section-num">06</span>
          </div>
          <h2 className="contact-title">お気軽に<br />ご連絡ください</h2>
          <p className="contact-jp">GET IN TOUCH</p>
          <div className="contact-detail">
            <div className="contact-row">
              <span className="contact-row-key">氏名</span>
              <span className="contact-row-val">松村 証</span>
            </div>
            <div className="contact-row">
              <span className="contact-row-key">電話</span>
              <span className="contact-row-val">+81-70-8934-4765</span>
            </div>
            <div className="contact-row">
              <span className="contact-row-key">メール</span>
              <span className="contact-row-val">
                <a href="mailto:info@nokki.net" className="contact-email">
                  info@nokki.net
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-note">
            ノッキの森は、千葉県流山市を拠点とする独立系のクリエイティブスタジオです。バイリンガル絵本、B2Bデジタルイラスト、3Dデザインを通じて、日本と欧州市場をつなぐ作品を制作しています。
          </p>
          <svg className="contact-art" width="260" height="240" viewBox="0 0 260 240" fill="none" aria-hidden="true">
            <polygon points="10,10 200,30 240,150 140,230 20,190 0,80" stroke="#F4F1EA" strokeWidth="0.8" />
            <polygon points="40,40 180,20 230,130 150,210 30,180 10,70" stroke="#F4F1EA" strokeWidth="0.8" />
            <polygon points="80,60 160,50 200,120 140,180 60,160 40,90" stroke="#C89070" strokeWidth="0.8" />
            <polygon points="100,80 150,70 175,115 135,155 80,140 70,100" stroke="#C89070" strokeWidth="0.7" />
            <line x1="10" y1="10" x2="140" y2="230" stroke="#F4F1EA" strokeWidth="0.5" opacity="0.5" />
            <line x1="200" y1="30" x2="20" y2="190" stroke="#F4F1EA" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>
      </section>
    </>
  );
}
