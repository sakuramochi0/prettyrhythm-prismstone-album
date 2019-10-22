# プリズムストーンアルバム

💛 プリズムストーン検索アプリ、作ってみた！

## これは何？

ゲーム「プリティーリズム」のプリズムストーンを一覧して検索できるウェブアプリです。

## どうして作ったの？

プリティーリズムのゲームの公式ウェブサイトには[プリズムストーン一覧](http://prettyrhythm.jp/list/as/index.php)のページがありました。正確には、現在でもありますが、いつかウェブサイトのどこかのリニューアル時に、プリズムストーン一覧画面を動かしていた PHP スクリプトへのリンクの辺りが壊れて、一覧に何も表示されなくなってしまいました。プリズムストーンの画像はちゃんとホストされています。

お問い合わせから修正が必要であることは伝えたのですが、全く返事がありませんでした。そこで、[Wayback Machine で見つけた過去のウェブサイトからスクレイピングした情報](https://github.com/sakuramochi0/prettyrhythm-prismstone-scrapy)を使用して検索アプリを作りました。

## 開発方法

```console
$ git clone https://github.com/sakuramochi0/prettyrhythm-prismstone-album
$ cd prettyrhythm-prismstone-album/
$ yarn
$ yarn develop
$ open http://localhost:8080
```

## 主な技術スタック

- [Gridsome](https://gridsome.org/) v0.7
  - [Vue.js](http://vuejs.org/) v2
  - [GraphQL](http://graphql.org/)
- [Vuetify](https://vuetifyjs.com/) v2
- [Fuse.js](https://fusejs.io/) v3

## ライセンス

[GNU GPL v3](./LICENSE)
