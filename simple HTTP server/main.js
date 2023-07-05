const http = require("http");

const host = "localhost";
const port = 8000;

const requestHandler = function (req, res) {
    if (req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        switch (req.url) {
            case "/":
            case "/home":
                res.writeHead(200);
                res.end(`<html><body><h1>Welcome</h1></body></html>`);
                break;
            default:
                res.writeHead(404);
                res.end(`<html><body><h1>404</h1></body></html>`);
        }
    } else if (req.method === "POST") {
        res.setHeader("Content-Type", "application/json");
        switch (req.url) {
            case "/api":
                res.writeHead(200);
                res.end(`{"api_list": []}`);
                break;
            default:
                res.writeHead(404);
                res.end(`{"status": 404, "message": "Invalid POST request"}`);
        }
    }
};

const server = http.createServer(requestHandler);
server.listen(port, host, () => {
    console.log(`Started @ ${host}:${port}`);
});
