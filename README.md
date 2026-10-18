# 宮澤優介 研究紹介ホームページ

公開URL: https://miyazawa-yusuke-md.github.io/

HTML/CSSとお問い合わせ用の小さなJavaScriptのみを使用します。通常の公開にビルド・Node.js・Quartoは不要です。

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
| フォーム送信先 | `assets/contact-config.js` |

## お問い合わせフォーム

Formspreeの受信用フォームIDで送信します。受信先メールは公開コードに記載しません。現在は未接続のため送信できません。設定方法は `CONTACT_SETUP.md` を参照してください。登録・通知先確認・実メールによるテストが必要です。

## 更新・確認

公開元はmainブランチのルートです。編集後にコミットするとPagesで公開されます。確認事項: 全ページのリンク、スマートフォン表示、メールアドレス非掲載、研究紹介と業績の相互リンク、英語ページとsitemapの整合性。

ローカル表示はファイルを直接開くか、`python3 -m http.server 8000` を利用できます。フォームはJavaScriptが必要です。地図はインターネット接続時にGoogle Mapsから読み込まれます。

2026-10-19の更新: 背景を白、アクセントを旧Google Sitesの青（#007BBF）に変更。2026年4月1日の着任に統一。研究4分野を独立ページ化。論文3件・学会発表10件に紹介概要を付記し、JMAI AWARDの受賞を追加。移行説明の注記・X・Instagram・公開ページのメールアドレスを削除。

発表概要は題名・本人が共有した研究内容に基づく紹介文であり、学会抄録の転載ではありません。未確認の数値結果・共著者・実施日を補っていません。
