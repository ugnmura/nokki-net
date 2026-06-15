import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 / Impressum — ノッキの森',
  description: 'ノッキの森の会社概要 / Legal disclosure for Nokki no Mori.',
};

export default function Impressum() {
  return (
    <section className="impressum">
      <div className="section-header">
        <span className="section-label">会社概要 / Impressum</span>
        <div className="section-rule" />
        <span className="section-num">—</span>
      </div>
      <h1 className="section-title">会社概要</h1>

      <div className="summary-grid">
        <div className="summary-row">
          <span className="summary-key">屋号</span>
          <div className="summary-dash" />
          <span className="summary-val">NOKKI NO MORI</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">代表者</span>
          <div className="summary-dash" />
          <span className="summary-val">Akashi Matsumura</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">所在地</span>
          <div className="summary-dash" />
          <span className="summary-val">
            千葉県 流山市 ・ 日本
            <span className="summary-val-sub">Chiba Prefecture, Nagareyama City, Japan</span>
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">事業内容</span>
          <div className="summary-dash" />
          <ul className="impressum-list">
            <li>イラスト制作</li>
            <li>キャラクターデザイン</li>
            <li>3Dモデリング</li>
            <li>3Dプリント関連デザイン</li>
            <li>出版・コンテンツ制作</li>
          </ul>
        </div>
        <div className="summary-row">
          <span className="summary-key">設立</span>
          <div className="summary-dash" />
          <span className="summary-val">2026年 5月</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">電話番号</span>
          <div className="summary-dash" />
          <span className="summary-val">
            <a href="tel:+81708934765" className="impressum-link">+81-70-8934-4765</a>
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">メールアドレス</span>
          <div className="summary-dash" />
          <span className="summary-val">
            <a href="mailto:info@nokki.net" className="impressum-link">info@nokki.net</a>
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">ウェブサイト</span>
          <div className="summary-dash" />
          <span className="summary-val">
            <a href="https://nokki.net" className="impressum-link">https://nokki.net</a>
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">営業時間</span>
          <div className="summary-dash" />
          <span className="summary-val">平日 9:00 〜 18:00</span>
        </div>
      </div>
    </section>
  );
}
