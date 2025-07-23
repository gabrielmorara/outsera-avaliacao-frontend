# Outsera Avaliação Frontend

Este projeto foi desenvolvido como parte de uma avaliação técnica.  
O objetivo é desenvovler uma aplicação Angular que consome a API pública do Golden Raspberry Awards.

## 🏗️ Tecnologias Utilizadas

- **Angular 17** e **Angular CLI** para construção da aplicação web
- **TypeScript** para a escrita do código fonte
- **RxJS** e **Zone.js** para programação reativa e controle de execução
- **Jest** com **jest-preset-angular** para os testes unitários

## 📂 Estrutura do Projeto

- `package.json` e `angular.json` – Configurações do projeto
- `src/` – Código fonte da aplicação Angular
  - `app/` – Componentes e serviço do dashboard e da lista de filmes
  - `index.html`, `main.ts`, `styles.css`, `polyfills.ts` – Arquivos de inicialização da aplicação
- `tests/` – Casos de teste escritos com Jest
- `fetch-movies.ts` – Exemplo simples de requisição à API

## ⚙️ Como rodar o projeto

1. Instale o **Node.js** (versão 18 ou superior) e o **npm**
2. Execute `npm install` para baixar as dependências
3. Inicie o servidor de desenvolvimento com `npm start`
   A aplicação ficará disponível em `http://localhost:4200`

## 🧪 Rodando os testes

Após instalar as dependências, execute:

```bash
npm test
```