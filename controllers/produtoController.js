const produtos = [];

const listarProdutos = (req, res) => {
    res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
    res.end(JSON.stringify(produtos));
};

const cadastrarProduto = (req, res) => {
    let corpo = '';

    req.on('data', (parte) => {
        corpo += parte;
    });

    req.on('end',  () => {
        const novoProduto = JSON.parse(corpo);
        if (!novoProduto.nome || typeof novoProduto.nome !== 'string' || !novoProduto.nome.trim()) {
            res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify({ erro: 'Nome do produto é obrigatório' }));
            return;
        }
        if (typeof novoProduto.preco !== 'number' || !Number.isFinite(novoProduto.preco) || novoProduto.preco < 0) {
            res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify({ erro: 'Preço do produto deve ser um número válido e não negativo' }));
            return;
        }
        if (!Number.isInteger(novoProduto.quantidade) || novoProduto.quantidade < 0) {
            res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify({ erro: 'Quantidade do produto deve ser um número inteiro não negativo' }));
            return;
        }
        produtos.push(novoProduto);
        res.writeHead(201, {'Content-type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(novoProduto));
    });
};

module.exports = { listarProdutos, cadastrarProduto };