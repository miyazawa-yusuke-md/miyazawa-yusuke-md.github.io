# 宮澤優介 研究紹介ホームページ

公開URL: https://miyazawa-yusuke-md.github.io/

HTML/CSSを使用し、お問い合わせにはGoogleフォームを埋め込んでいます。通常の公開にビルド・Node.js・Quartoは不要です。

## 編集するファイル

| 内容 | ファイル |
|---|---|
| ホーム・お知らせ | `index.html` |
| 経歴・教育活動 | `profile.html` |
| 研究分野一覧 | `research.html` |
| 病理 | `research-pathology.html` |
| 医学教育 | `research-education.html` |
| 医療DX・生成AI | `research-medical-dx.html` |
| 統計・機械学習 | `research-data-science.html` |
| 論文・学会発表・受賞 | `publications.html` |
| お問い合わせ・地図 | `contact.html` |
| 英語概要 | `en.html` |
| 基本デザイン／追加配色 | `assets/style.css` / `assets/custom.css` |
| Googleフォームの埋め込みURL | `contact.html` 内の `google-contact-form` |

## お問い合わせフォーム

本人が作成したGoogleフォーム（https://forms.gle/Y7PeHk13LW1z4hx26）を `contact.html` に埋め込んでいます。受信先メールアドレスや秘密鍵は公開コードに記載しません。フォームが表示されない場合に備え、別タブで開くリンクも設置しています。設問や回答の管理、メール通知の設定はGoogleフォーム側で行います。詳細は `CONTACT_SETUP.md` を参照してください。

## 更新・確認

公開元はmainブランチのルートです。編集後にコミットするとPagesで公開されます。確認事項: 全ページのリンク、スマートフォン表示、メールアドレス非掲載、研究紹介と業績の相互リンク、英語ページとsitemapの整合性。

ローカル表示はファイルを直接開くか、`python3 -m http.server 8000` を利用できます。Googleフォームと地図はインターネット接続が必要で、フォームの利用にはブラウザのJavaScriptを有効にしてください。サイト独自のフォーム送信スクリプトはありません。

2026-10-19の更新: 背景を白、アクセントを旧Google Sitesの青（#007BBF）に変更。2026年4月1日の着任に統一。研究4分野を独立ページ化。論文3件・学会発表10件に紹介概要を付記し、JMAI AWARDの受賞を追加。移行説明の注記・X・Instagram・公開ページのメールアドレスを削除。

発表概要は題名・本人が共有した研究内容に基づく紹介文であり、学会抄録の転載ではありません。未確認の数値結果・共著者・実施日を補っていません。

同日の追加更新: お問い合わせをGoogleフォームの公式埋め込み形式に切り替え、受付準備中の表示と旧フォーム用JavaScriptを削除しました。フォームの設問・テーマ・メール通知設定は変更していません。回答のテスト送信は行っていません。

## 2026-10-19 読みやすさの調整

見出し直下・セクション間・業績カード内の余白を縮小し、タイトルと著者・会場・概要のまとまりを強調しました。文字サイズを一律に小さくせず、白背景と青の配色を維持しています。追加スタイルは `assets/custom.css` の「Compact reading rhythm」節です。

J-GLOBAL ID `202401015821553493` をプロフィール・英語プロフィール・連絡先に追加し、ホームの研究者情報からもリンクしました。リンク先: https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202401015821553493

Googleフォームと地図の埋め込み先・フォーム設定、論文・発表・受賞の内容は変更していません。
