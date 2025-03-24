# Projeto de Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados desenvolvida com Cypress, abrangendo cenários de login, criação de usuários, produtos e buscas na API e no frontend da aplicação Serverest.

Os testes end-to-end utilizam o padrão Page Objects para melhor organização e reutilização do código.

## 📌 Requisitos
- Node.js 16+
- Cypress instalado globalmente ou no projeto

## 📦 Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## 🚀 Como Executar os Testes
### Testes em Modo Headless
```sh
npx cypress run
```

### Testes com a Interface Gráfica
```sh
npx cypress open
```

## 🏗️ Comandos Customizados
### Criar Usuário
```js
cy.createUser();
```
Cria um novo usuário e salva os dados no arquivo `backendData.json`.

### Fazer Login
```js
cy.loginWithStoredUser();
```
Faz login utilizando os dados do usuário armazenados e salva o token no arquivo `token.json`.

### Criar Produto
```js
cy.createProduct();
```
Cria um novo produto utilizando o token salvo.

## 🎯 Cenários de Testes End-to-End
### Login
- Realiza login com credenciais válidas
- Tenta login com credenciais inválidas

### Search
- Busca por um item existente

### Signup
- Cadastra um novo usuário com dados válidos

## 🔗 Links

- Frontend: https://front.serverest.dev/

- Swagger API: https://serverest.dev/



## 📄 Licença
Este projeto está sob a licença MIT. Para mais informações, consulte o arquivo LICENSE.

