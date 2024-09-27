# Surgical Appointments

Este projeto é uma aplicação Vue.js que gerencia solicitações cirúrgicas. Ele utiliza `json-server` para simular uma API RESTful e fornece uma interface amigável para a interação com os dados.

## Tecnologias Utilizadas

- **Vue.js**: Framework para a construção da interface de usuário.
- **Vuetify**: Biblioteca de componentes UI para Vue.js.
- **Vue Router**: Gerenciamento de rotas para a aplicação.
- **Axios**: Cliente HTTP para requisições assíncronas.
- **TypeScript**: Para a escrita de código tipado.
- **json-server**: Simulador de API RESTful.
- **Concurrently**: Para executar múltiplos comandos simultaneamente.

## Pré-requisitos

Antes de começar, verifique se você possui o Node.js e o npm instalados. Para verificar, execute:

```bash
node -v
npm -v
```

## Instalação
Clone o repositório:
```bash
git clone https://github.com/luishsf/surgical-appointments.git
```

Navegue até o diretório do projeto:
```bash
cd surgical-appointments
```

Instale as dependências:
```bash
npm install
```

## Executando o Projeto
Para iniciar a aplicação e o servidor json-server simultaneamente, use o comando:
```bash
npm run start
```

Isso irá:
- Iniciar o servidor de desenvolvimento do Vue.js na porta padrão 8080.
- Iniciar o json-server na porta 3000.
A aplicação estará disponível em http://localhost:8080 e a API em http://localhost:3000.

## Uso
- Acesse a aplicação no navegador em http://localhost:8080.
- Os dados podem ser visualizados e manipulados através da API em http://localhost:3000.
