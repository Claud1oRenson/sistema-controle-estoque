# Sistema de Controle de Estoque

**Instituição:** Faculdade Gran  
**Disciplina:** Projeto Integrador  
**Projeto:** Sistema de Controle de Estoque

**Site da instituição:** https://faculdade.grancursosonline.com.br/

## 1. Apresentação do Projeto

O Sistema de Controle de Estoque é um projeto acadêmico desenvolvido como parte da disciplina Projeto Integrador da Faculdade Gran.

O objetivo do projeto é desenvolver uma aplicação que permita gerenciar produtos e suas respectivas quantidades em estoque, contribuindo para a organização e o controle de informações.

O sistema está sendo desenvolvido de forma incremental, com a implementação e os testes de suas funcionalidades ao longo do projeto.

## 2. Objetivos

### Objetivo Geral

Desenvolver um sistema de controle de estoque que permita cadastrar, consultar e gerenciar informações de produtos.

### Objetivos Específicos

- Implementar uma API para gerenciamento de produtos.
- Permitir o cadastro de produtos com nome, preço e quantidade.
- Disponibilizar a consulta dos produtos cadastrados.
- Validar os dados recebidos para evitar cadastros inválidos.
- Ampliar gradualmente as funcionalidades do sistema.

## 3. Tecnologias Utilizadas

- **JavaScript:** linguagem de programação utilizada no desenvolvimento.
- **Node.js:** ambiente de execução do servidor.
- **HTTP:** protocolo utilizado na comunicação com a API.
- **JSON:** formato utilizado na troca de dados.
- **Visual Studio Code:** ambiente de desenvolvimento.
- **Git e GitHub:** ferramentas utilizadas para versionamento e armazenamento do código-fonte.

## 4. Situação Atual do Desenvolvimento

Nesta etapa, o sistema possui uma API HTTP capaz de cadastrar e listar produtos.

O cadastro conta com validações para nome, preço e quantidade, impedindo o registro de informações inválidas.

Atualmente, os produtos são armazenados temporariamente na memória do servidor. A persistência dos dados será considerada em etapas futuras do desenvolvimento.

## 5. Estrutura do Projeto

O projeto está organizado em arquivos e diretórios que separam a inicialização do servidor da lógica de gerenciamento dos produtos.

```text
sistema-controle-estoque/
│
├── controllers/
│   └── produtoController.js
│
├── app.js
├── package.json
└── README.md
```

### Descrição dos Arquivos

- **app.js:** responsável pela criação do servidor HTTP, definição da porta e direcionamento das requisições para as funções correspondentes.

- **controllers/produtoController.js:** contém as funções responsáveis por listar, cadastrar e validar os dados dos produtos.

- **package.json:** armazena as informações e configurações do projeto Node.js.

- **README.md:** contém a documentação técnica, incluindo os objetivos, a estrutura e as funcionalidades do sistema.

A separação das responsabilidades entre os arquivos facilita a organização, a manutenção e a evolução do código.


## 6. Endpoints da API

A API utiliza o protocolo HTTP para permitir o cadastro e a consulta de produtos.

### 6.1. Listar Produtos

- **Método:** GET
- **Endpoint:** `/produtos`
- **Descrição:** Retorna a lista de produtos cadastrados.

**Resposta de sucesso (200 OK):**

```json
[
  {
    "nome": "Monitor",
    "preco": 800,
    "quantidade": 5
  }
]
```

### 6.2. Cadastrar Produto

- **Método:** POST
- **Endpoint:** `/produtos`
- **Descrição:** Cadastra um novo produto no sistema.

**Exemplo de requisição:**

```json
{
  "nome": "Teclado",
  "preco": 150,
  "quantidade": 10
}
```

**Resposta de sucesso (201 Created):**

A API retorna os dados do produto cadastrado.

### 6.3. Validação dos Dados

Antes de cadastrar um produto, a API verifica:

- O nome deve ser um texto não vazio.
- O preço deve ser um número válido e não negativo.
- A quantidade deve ser um número inteiro não negativo.

Caso alguma validação falhe, a API retorna o código HTTP `400 Bad Request`, acompanhado de uma mensagem de erro.

### 6.4. Armazenamento dos Dados

Atualmente, os produtos são armazenados em memória durante a execução do servidor.

Isso significa que os dados cadastrados são perdidos quando o servidor é reiniciado.


### 6.5. Consultar Produto por ID

- **Método:** GET
- **Endpoint:** `/produtos/:id`
- **Descrição:** Permite consultar um produto específico por meio de seu identificador único.

**Exemplo de requisição:**

GET http://localhost:3000/produtos/1

**Resposta de sucesso (200 OK):**

```json
{
  "nome": "Teclado",
  "preco": 150,
  "quantidade": 10,
  "id": 1
}
```

**Produto não encontrado (404 Not Found):**

```json
{
  "erro": "Produto não encontrado"
}
```

**ID inválido (400 Bad Request):**

```json
{
  "erro": "ID do produto deve ser um número inteiro positivo"
}
```

**Validação:**

O identificador deve conter apenas dígitos e representar um número inteiro positivo e seguro. Valores negativos, zero, letras e números decimais são rejeitados.

