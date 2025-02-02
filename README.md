# Express API

Este projeto é uma API construída com Express.js, ideal para aplicações backend rápidas e escaláveis.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) (Monitoramento para desenvolvimento)
- [UUID](https://www.npmjs.com/package/uuid) (Geração de identificadores únicos)
- [Yarn](https://yarnpkg.com/) (Gerenciador de pacotes)

## 📂 Estrutura do Projeto

```
express_api/
│-- src/
│   ├── app/
│   │   ├── controllers/       # Controladores das requisições
│   │   │   ├── ContactController.js
│   │   ├── repositories/      # Repositórios para acesso a dados
│   │   │   ├── ContactRepository.js
│   ├── index.js              # Arquivo principal
│   ├── routes.js             # Definição das rotas
│-- .editorconfig             # Configuração do editor
│-- .gitignore                # Arquivos ignorados pelo Git
│-- eslint.config.mjs         # Configuração do ESLint
│-- package.json              # Dependências e scripts
│-- yarn.lock                 # Lockfile do Yarn
│-- README.md                 # Documentação do projeto
```

## 📦 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/RomuloSemiao/express_api.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   cd express_api
   ```

3. Instale as dependências:
   ```sh
   yarn install
   ```

## ▶️ Execução

### Modo de Desenvolvimento
```sh
yarn dev
```

## 📌 Rotas Disponíveis

### Exemplo de Rota:
- `GET /contacts` → Retorna uma lista de contatos.

Mais detalhes das rotas podem ser encontrados no arquivo `routes.js`.

---

Entre em contato pelo meu [Linkedin](https://www.linkedin.com/in/romulosemiao/)
Desenvolvido por [Romulo Semião](https://github.com/RomuloSemiao) 🚀

