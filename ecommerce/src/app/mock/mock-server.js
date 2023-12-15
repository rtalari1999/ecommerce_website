const jsonServer = require("json-server");
const { json } = require("stream/consumers");
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const productService = require("./data/productService.json");

const port = 3000;
mockServer.listen(port, () => {
    console.log(`JSON server listening on port ${port}`);
});

mockServer.get("/productList.json", (req, res, next) => {
    res.status(200).send(productService.productSucess)
})
