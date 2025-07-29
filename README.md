# Outsera Avaliação Frontend

Este projeto foi desenvolvido como parte de uma avaliação técnica.  
O objetivo é desenvolver uma aplicação Angular que consome a API pública do Golden Raspberry Awards.

## 🏗️ Tecnologias Utilizadas

- **Angular 20** para construção da aplicação web
- **TypeScript** para a escrita do código fonte
- **Karma e Jasmine** para os testes unitários

## 📂 Estrutura do Projeto
```bash
├── src/
│   ├── app/                 # Componentes e serviços principais da aplicação
│   │   ├── dashboard/       # Dashboard e seus testes
│   │   │   └── dashboard.component.spec.ts
│   │   ├── movies/          # Listagem de filmes e testes
│   │   │   ├── movies.component.spec.ts
│   │   │   └── movie.service.spec.ts
│   ├── assets/              # Arquivos estáticos (imagens, ícones, etc)
│   ├── environments/        # Configurações de ambiente (dev, prod, etc)
│   ├── index.html           # HTML principal
│   ├── main.ts              # Bootstrap da aplicação Angular
│   ├── polyfills.ts         # Polyfills para compatibilidade
│   ├── styles.css           # Estilos globais
│   └── test.ts              # Bootstrap dos testes unitários
│
├── .eslintrc.json           # Configuração de lint
├── .gitignore               # Arquivos/pastas ignorados pelo Git
├── .prettierrc              # Configuração de formatação
├── angular.json             # Configuração do Angular CLI
├── karma.conf.js            # Configuração do Karma
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

## ⚙️ Como rodar o projeto

1. Instale o **Node.js** (versão 20.x ou superior) e o **npm**
2. Execute `npm install` para baixar as dependências
3. Inicie o servidor de desenvolvimento com `npm start`
   A aplicação ficará disponível em `http://localhost:4200`

## 🧪 Rodando os testes

Após instalar as dependências, execute:

```bash
ng generate config karma
npm test
```