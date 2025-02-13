const { defineConfig } = require("cypress");
require('dotenv').config(); // Carregar variáveis do .env

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos Node aqui
    },
    
    baseUrl: 'https://dev.gerencieaqui.com.br/',
    env: {
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD
    },

    watchForFileChanges: false,  // Adiciona essa linha para desabilitar a execução automática ao salvar
  },

});

