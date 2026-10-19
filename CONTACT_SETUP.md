# お問い合わせフォームの管理

お問い合わせページでは、本人が作成したGoogleフォームを埋め込んでいます。

- 回答者用URL: https://forms.gle/Y7PeHk13LW1z4hx26
- 埋め込みURL: https://docs.google.com/forms/d/e/1FAIpQLSfYK22ShtWZmf-s1qZ6FoNZEQzWFMW9z7tDWXVVOZFvsoK9yA/viewform?embedded=true
- 設置場所: `contact.html` の `iframe#google-contact-form`
- 幅・高さ: `assets/custom.css` の `.google-form-frame`（PC 820px、スマートフォン 920px）

## 日常の管理

設問・テーマ・回答の受付状態はGoogleフォームの編集画面で管理します。同じフォームを編集する限り、通常はサイト側のURL変更は不要です。別のフォームに変更する場合は、iframeのURLと別タブ用リンクを両方更新してください。埋め込み内部の見た目はGoogleフォーム側に従います。

## 新しい回答のメール通知

受信したいアカウントでGoogleフォームの編集画面を開き、「回答」タブのその他メニュー（︙）から「新しい回答についてのメール通知を受け取る」を有効にしてください。サイトへの埋め込みと、フォーム管理者への通知設定は別です。この作業では管理者の通知設定を変更していません。本文を整形して任意の宛先に配送するApps Scriptも追加していません。

公式ヘルプ: https://support.google.com/docs/answer/139706?hl=ja

## 確認と注意

短縮URLがGoogleフォームの回答者用ページに転送され、埋め込みURLがログインなしの取得でHTTP 200を返すことを確認しました。確認のための回答は送信していません。回答の受付とメール通知の最終確認は、管理者がテスト送信して行ってください。

フォームが表示されない場合は、ページ内の「フォームを別のタブで開く」を使用してください。患者情報や研究上の機密情報の送信は想定していません。GitHub側のHTML・CSSに受信先メールアドレス、パスワード、秘密鍵を追加しないでください。
