
// モジュールの読み込み
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// windowオブジェクトを保持
let window


app.on('Window-all-closed', function() {

    // ブラウザウィンドウの作成
    window = new BrouserWindow({width: 600, height: 400});
    
    // index.htmlの読み込み
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // windowが閉じられた際の処理
    window.on('closed', () => {
        window = null
    })
});