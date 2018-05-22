
// モジュールの読み込み
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// windowオブジェクトを保持
let window


function createWindow() {

    // ブラウザウィンドウの作成
    window = new BrowserWindow({width: 800, height: 600})
    
    // index.htmlの読み込み
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // 開発用ツールを開く
    //window.webContents.openDevTools()

    // windowが閉じられた際の処理
    window.on('closed', function () {
        window = null
    })
}

// 準備完了時の処理
app.on('ready', createWindow)

// すべてのwindowが閉じられた際の処理
app.on('window-all-closed', function () {
    // darwin os の場合は違うらしい
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// アプリがアクティブになった際の処理
app.on('activate', function () {
    if (window === null) {
        createWindow()
    }
})
