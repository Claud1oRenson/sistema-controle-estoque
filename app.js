const http = require ('http');
const { listarProdutos, cadastrarProduto } = require('./controllers/produtoController');

const server = http.createServer((req, res) => {
    if (req.url === '/produtos' && req.method === 'GET') {  
        listarProdutos(req, res);
        return;   
    }
    if (req.url === '/produtos' && req.method === 'POST') {
        cadastrarProduto(req, res);
        return;
    }
    /*if (req.url === '/produtos' && req.method === 'PUT') {
        cadastrarProduto(req, res);
        return;
    }*/
    
    res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
    res.end('Olá, Mundo!');
});
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

