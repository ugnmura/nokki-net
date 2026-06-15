import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー / Privacy Policy — ノッキの森',
  description: 'ノッキの森のプライバシーポリシー / Privacy policy for Nokki no Mori.',
};

export default function Datenschutz() {
  return (
    <section className="impressum">
      <div className="section-header">
        <span className="section-label">プライバシーポリシー / Privacy Policy</span>
        <div className="section-rule" />
        <span className="section-num">—</span>
      </div>
      <h1 className="section-title">プライバシーポリシー</h1>

      <div className="prose">
        <p>
          NOKKI NO MORI（以下、「当事業者」）は、お客様の個人情報の保護を重要な責務と考え、適切に取り扱います。
        </p>

        <ol className="prose-list">
          <li>
            当ウェブサイトのお問い合わせフォームまたは電子メールを通じて取得した個人情報は、お問い合わせへの回答およびサービス提供に必要な範囲でのみ利用いたします。
          </li>
          <li>
            法令に基づく場合を除き、お客様の同意なく第三者へ個人情報を提供することはありません。
          </li>
          <li>
            当ウェブサイトでは、サービス向上およびアクセス解析のため、Cookie等の技術を利用する場合があります。
          </li>
          <li>
            個人情報の開示、訂正、削除等をご希望の場合は、下記までご連絡ください。
          </li>
        </ol>
      </div>

      <div className="prose-block">
        <h2 className="prose-h2">お問い合わせ先</h2>
        <div className="prose-contact">
          <p>NOKKI NO MORI</p>
          <p>
            E-mail:{' '}
            <a href="mailto:info@nokki.net" className="impressum-link">info@nokki.net</a>
          </p>
        </div>
      </div>

      <p className="prose-date">制定日 ・ 2026年 6月 1日</p>
    </section>
  );
}
