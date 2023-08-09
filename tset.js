// 必要なモジュールを読み込む
const http = require('http');

// サーバーの作成
const server = http.createServer((req, res) => {
  // レスポンスヘッダーの設定
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // レスポンスの書き込み
  res.end('Hello, World!\n');
});

// サーバーを指定のポートでリッスン
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
