const jsonServer = require('json-server');
const server = jsonServer.create('--watch db.json --routes routes.json');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3004;

// let db = require('./db.json');

server.use(jsonServer.rewriter({
    '/api/v1/users': '/users',
    '/api/v1/companies': '/companies'
}))


server.use(middlewares);

server.get('/echo', (req, res)=> {
    res.jsonp(req.query);
   
})


// All Post, Put and Patch request
server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({
    '/api/v1/users': '/users'
}));




// Setup stuff
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on ${port}`);
});