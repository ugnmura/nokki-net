import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 / Legal Notice — ノッキの森',
  description: '特定商取引法に基づく表記 / Legal notice for Nokki no Mori.',
};

export default function Tokutei() {
  return (
    <section className="impressum">
      <div className="section-header">
        <span className="section-label">特定商取引法に基づく表記 / Legal Notice</span>
        <div className="section-rule" />
        <span className="section-num">—</span>
      </div>
      <h1 className="section-title">特定商取引法に基づく表記</h1>

      <div className="summary-grid">
        <div className="summary-row">
          <span className="summary-key">販売事業者</span>
          <div className="summary-dash" />
          <span className="summary-val">NOKKI NO MORI</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">代表責任者</span>
          <div className="summary-dash" />
          <span className="summary-val">Akashi Matsumura</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">所在地</span>
          <div className="summary-dash" />
          <span className="summary-val summary-val-prose">
            ご請求いただいた場合、遅滞なく開示いたします。
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">電話番号</span>
          <div className="summary-dash" />
          <span className="summary-val">
            <a href="tel:+81708934765" className="impressum-link">070-8934-4765</a>
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
          <span className="summary-key">販売価格</span>
          <div className="summary-dash" />
          <span className="summary-val summary-val-prose">
            各商品・サービスページに記載
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">支払方法</span>
          <div className="summary-dash" />
          <span className="summary-val summary-val-prose">
            銀行振込、クレジットカード等
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">商品引渡時期</span>
          <div className="summary-dash" />
          <span className="summary-val summary-val-prose">
            商品またはサービスごとに記載
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-key">返品・キャンセル</span>
          <div className="summary-dash" />
          <span className="summary-val summary-val-prose">
            デジタルコンテンツおよび受注制作サービスの性質上、納品後の返品・返金はお受けできません。
          </span>
        </div>
      </div>
    </section>
  );
}
