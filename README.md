# 宮澤優介 研究紹介サイト

公開URL: https://miyazawa-yusuke-md.github.io/

GitHub Pagesで配信する、HTMLとCSSだけの静的サイトです。Node.js、Python、Quarto、データベース、外部フォント、アクセス解析はサイトの表示・公開には不要です。JavaScriptを無効にしても全ページを閲覧できます。

## 内容を更新する

各HTMLファイルの本文を編集して `main` にコミットすると、GitHub Pagesに反映されます。共通する所属・ナビゲーション・フッターの変更時は全HTMLを揃えてください。

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ・お知らせ・研究分野の概要 |
| `profile.html` | 経歴・教育活動・年度別講義時間 |
| `research.html` | 4分野の研究紹介 |
| `publications.html` | 論文・学会発表 |
| `contact.html` | 連絡先・所在地・外部リンク |
| `en.html` | 英語のプロフィールと論文一覧 |
| `assets/style.css` | 共通デザイン・スマートフォン対応 |
| `MIGRATION_NOTES.md` | 旧サイトからの移行範囲と確認事項 |

更新時は該当ページの更新日と `sitemap.xml` の `lastmod` も更新します。変更しないページの更新日はそのままにします。

## 公開設定

`Settings → Pages → Build and deployment` で `Deploy from a branch`、`main`、`/(root)` を使用します。`.nojekyll` はHTMLをそのまま公開するためのファイルなので削除しないでください。独自ドメインや追加の認証情報は設定していません。

## ローカルで確認する

`index.html` をブラウザで開けば確認できます。ローカルサーバーを使う場合は、リポジトリのフォルダで以下を実行します（Pythonがある場合）。

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

その後 `http://127.0.0.1:8000/` を開きます。

## 掲載方針

- 研究者の経歴・研究内容・業績を中心とし、宣伝的なキャッチコピーや未確認の成果を加えません。
- 論文は題名・著者・掲載誌・年・DOIを記載し、準備中の発表は実施済み業績と分けます。
- 本リポジトリもWebサイトも公開です。患者情報、未公開データ、学内資料、認証情報を追加しないでください。
- メンバー限定ページはこのサイトの中に置かず、別のアクセス制御付きサービスを利用します。

GitHub公式ドキュメント: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
