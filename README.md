# Outsera Avaliação Frontend

Este projeto foi desenvolvido como parte de uma avaliação técnica.  
O objetivo é desenvolver uma aplicação Angular que consome a API pública do Golden Raspberry Awards.

## 🏗️ Tecnologias Utilizadas

- **Angular** para construção da aplicação web
- **TypeScript** para a escrita do código fonte
- **Jest** para os testes unitários

## 📂 Estrutura do Projeto
```bash
├── src/
│   ├── app/                 # Componentes e serviços principais da aplicação
│   ├── assets/              # Arquivos estáticos (imagens, ícones, etc)
│   ├── environments/        # Configurações de ambiente (dev, prod, etc)
│   ├── favico.ico           # Ícone da aplicação
│   ├── index.html           # HTML principal (entrypoint)
│   ├── main.ts              # Bootstrap da aplicação Angular
│   ├── polyfills.ts         # Polyfills para compatibilidade de browsers
│   └── styles.css           # Estilos globais da aplicação
│
├── tests/
│   └── app/
│       ├── dashboard/
│       │   └── dashboard.component.spec.ts      # Testes unitários do dashboard
│       └── movies/
│           ├── movies.component.spec.ts         # Testes unitários da listagem de filmes
│           └── movie.service.spec.ts            # Testes unitários do serviço de filmes
│
├── .eslintrc.json          # Configuração de lint
├── .gitignore              # Arquivos/pastas ignorados pelo Git
├── .prettierrc             # Configuração de formatação
├── angular.json            # Configuração do Angular CLI
├── jest.config.js          # Configuração do Jest
├── jest.setup.ts           # Setup global do Jest
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

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