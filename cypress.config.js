const { defineConfig } = require("cypress");
require('dotenv').config(); // Carregar variáveis do .env

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos Node aqui
    },
    baseUrl: 'http://192.168.230.238:4100',
    env: {
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD
    },
    
  },

});

