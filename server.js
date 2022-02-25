const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

//webserver
const server = http.createServer((req, res) => {
  //ブラウザからアクセスがきた時の処理
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(html);
    res.end();

    if(req.method == "GET") {
      
    }
    if(req.method == "POST") {

    }
});

server.listen(PORT, () => {
  console.log("server running");
});
