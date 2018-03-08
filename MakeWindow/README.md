
# MakeWindow ウィンドウの作成

<!-- TOC -->

- [MakeWindow ウィンドウの作成](#makewindow-ウィンドウの作成)
    - [プロジェクトの作成](#プロジェクトの作成)
        - [ディレクトリ構成](#ディレクトリ構成)

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
"main": "main.js"
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