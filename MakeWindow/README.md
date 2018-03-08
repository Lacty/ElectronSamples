
# MakeWindow ウィンドウの作成

<!-- TOC -->

- [MakeWindow ウィンドウの作成](#makewindow-ウィンドウの作成)
    - [プロジェクトの作成](#プロジェクトの作成)
        - [package.json全体](#packagejson全体)
        - [ディレクトリ構成](#ディレクトリ構成)
    - [main.jsの中身を書いていく](#mainjsの中身を書いていく)
    - [index.html](#indexhtml)
    - [起動](#起動)

<!-- /TOC -->


## プロジェクトの作成

- 作業するディレクトリを作成    
```sh
mkdir makewindow
```

- package.js(プロジェクトの設定ファイル)の作成    
`-y`オプションを付けるとデフォルト設定で自動生成してくれます
```sh
npm init -y
```

- エントリポイントの変更    
デフォルトでは`index.js`となっていますが、
今回はアプリの作成なので`main.js`に変更します
```javascript
// package.json
"main": "main.js"
```

- 起動時のスクリプトを指定    
`npm start`で起動した際に`electron`で起動するよう指定します
```javascript
// package.json
"scripts": {
  "start": "electron ."
}
```

- electronが必要になると記述    
バージョンに関しては現時点の最新`安定版`を使用
```javascript
// package.json
"devDependencies": {
  "electron": "^1.8.3"
}
```


### package.json全体
```javascript
{
  "name": "MakeWindow",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "devDependencies": {
    "electron": "^1.8.3"
  }
}
```

- main.js作成
```sh
touch main.js
```

- index.html作成
```sh
touch index.html
```

### ディレクトリ構成
```
MakeWindow/
  ├ index.html
  ├ main.js
  └ package.js
```


## main.jsの中身を書いていく
```javascript
// モジュールの読み込み
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// windowオブジェクトを保持
let window


function createWindow() {

    // ブラウザウィンドウの作成
    window = new BrowserWindow({width: 600, height: 400})
    
    // index.htmlの読み込み
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // 開発用ツールを開く
    window.webContents.openDevTools()

    // windowが閉じられた際の処理
    window.on('closed', () => {
        window = null
    })
}

// 準備完了時の処理
app.on('ready', createWindow)

// すべてのwindowが閉じられた際の処理
app.on('window-all-closed', () => {
    // darwin os の場合は違うらしい
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// アプリがアクティブになった際の処理
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
```


## index.html
最低限`Hello World`と画面に表示させるhtmlです
```html
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>Hello World!</title>
    </head>

    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```

## 起動
```sh
npm install
npm start
```
