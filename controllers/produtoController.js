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
        produtos.push(novoProduto);
        res.writeHead(201, {'Content-type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(novoProduto));
    });
};

module.exports = { listarProdutos, cadastrarProduto };