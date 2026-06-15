import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'ノッキの森 — Nokki no Mori',
  description:
    '千葉県流山市を拠点とする独立系クリエイティブスタジオ「ノッキの森」。デジタルイラスト、自費出版、3Dデザインを日本と欧州市場に向けて展開。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&family=Noto+Serif+JP:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav>
          <Link href="/" className="nav-logo">
            ノッキの森<span>NOKKI NO MORI</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/#about">概要</Link></li>
            <li><Link href="/#portfolio">作品集</Link></li>
            <li><Link href="/#pricing">価格</Link></li>
            <li><Link href="/#infrastructure">スタジオ</Link></li>
            <li><Link href="/#contact">お問い合わせ</Link></li>
          </ul>
        </nav>

        {children}

        <footer>
          <p className="footer-copy">© 2026 ノッキの森 ・ 松村 証</p>
          <div className="footer-right">
            <div className="footer-legal">
              <Link href="/impressum/" className="footer-link">会社概要 / Impressum</Link>
              <Link href="/tokutei/" className="footer-link">特定商取引法に基づく表記</Link>
              <Link href="/datenschutz/" className="footer-link">プライバシーポリシー / Privacy</Link>
            </div>
            <p className="footer-loc">千葉県 流山市 ・ 日本</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
