# プリズムストーンアルバム

💛 プリズムストーン検索アプリ、作ってみた！

![screenshot](screenshot.png)

## これは何？

ゲーム「プリティーリズム」のプリズムストーンを一覧して検索できるウェブアプリです。

## どうして作ったの？

プリティーリズムのゲームの公式ウェブサイトには[プリズムストーン一覧](http://prettyrhythm.jp/list/as/index.php)のページがありました。正確には、現在でもありますが、いつかウェブサイトのどこかのリニューアル時に、プリズムストーン一覧画面を動かしていた PHP スクリプトへのリンクの辺りが壊れて、一覧に何も表示されなくなってしまいました。

お問い合わせから修正が必要であることは伝えたのですが、全く返事がありませんでした。そこで、[Wayback Machine で見つけた過去のウェブサイトからスクレイピングした情報](https://github.com/sakuramochi0/prettyrhythm-prismstone-scrapy)を使用して検索アプリを作りました。

以前はプリズムストーンの画像だけはホストされていましたが、2020年12月頃に再確認したところ、オールスターズの古いサイトにリダイレクトされるようになってしまい、画像にもアクセスできなくなってしまったため、アーカイブした画像をGoogle Cloud Storageからホストするように変更しました。

## 開発方法

### develop

```console
make container-build
make start
```

### build

```console
make build
```

### deploy

```console
make deploy
```

## 主な技術スタック

- [Gridsome](https://gridsome.org/) v0.7
  - [Vue.js](http://vuejs.org/) v2
  - [GraphQL](http://graphql.org/)
- [Vuetify](https://vuetifyjs.com/) v2
- [Fuse.js](https://fusejs.io/) v3

## ライセンス

[GNU GPL v3](./LICENSE)

ただし、スクリーンショットのプリズムストーンの画像を除く。
