const http = require ('http');
const { listarProdutos, cadastrarProduto, buscarProdutoPorId } = require('./controllers/produtoController');

const server = http.createServer((req, res) => {
    if (req.url === '/produtos' && req.method === 'GET') {  
        listarProdutos(req, res);
        return;   
    }
    if (req.url === '/produtos' && req.method === 'POST') {
        cadastrarProduto(req, res);
        return;
    }
    if (req.url.startsWith('/produtos/') && req.method === 'GET') {
        const idTexto = req.url.split('/')[2];
        const id = /^\d+$/.test(idTexto) ? Number(idTexto) : NaN;
        if (!Number.isSafeInteger(id) || id <= 0) {
            res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify({ erro: 'ID do produto deve ser um número inteiro positivo' }));
            return;
        }

        buscarProdutoPorId(req, res, id);
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

