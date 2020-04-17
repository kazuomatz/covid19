# 静岡市 新型コロナウイルス感染症対策サイト

[![静岡市 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/2704723/79540781-ad23bd00-80c3-11ea-81c2-0302cb207102.png)](https://stopcovid19.metro.tokyo.lg.jp/)

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。


### コミュニケーションへの参加方法

静岡市Covid19対策サイトの運営方法や開発に関する議論は主要な開発メンバーと静岡市とでBacklogにて行っています。
必要に応じて@kazuomatzから招待しますが、Backlogの議論からTODOになったものは、issueに入れますのでそちらから確認してプルリクを出していただけると助かります。


### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

開発環境によっては重くて動かない場合があります。その場合は、以下のオプションをつけて起動して下さい。

```bash
$ yarn dev-no-axe
```


**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

**Vagrant を使う場合**
```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### VSCode + Remote Containersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

#### Topic
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。
詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。
詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。


### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。  
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的にHTMLが生成され、Amazon S3にコンテンツが転送され、 https://stopcovid19.city.shizuoka.lg.jp/ が更新されます。
`staging` ブランチがアップデートされると、自動的にHTMLが生成され、staging用サイト http://stop-covid19-shizuoka-staging.s3-website-ap-northeast-1.amazonaws.com/ が更新されます。
`development` ブランチがアップデートされると、自動的にHTMLが生成され、開発用サイト http://stop-covid19-shizuoka-dev.s3-website-ap-northeast-1.amazonaws.com/ が更新されます。

### ブランチルール

development, dev-hotfix 以外は Pull Request は禁止です。
Pull Request を送る際の branch は、以下のネーミングルールでお願いします。

機能追加系： feature/#{ISSUE_ID}-#{branch_title_name}  
ホットフィックス系: hotfix/#{ISSUE_ID}-#{branch_title_name}

#### 基本的なブランチ
| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 開発 | development | https://stopcovid19.city.shizuoka.lg.jp/ | base branch。基本はこちらに Pull Requestを送ってください |
| ステージング | staging | http://stop-covid19-shizuoka-staging.s3-website-ap-northeast-1.amazonaws.com/ |管理者以外の Pull Request は禁止です |
| 本番 | master | https://stopcovid19.city.shizuoka.lg.jp/ | 管理者以外の Pull Request は禁止です |
| 緊急適用用 | dev-hotfix | なし | 急ぎ本番に適用するべき修正。管理者から依頼された場合こちらを使ってください |
