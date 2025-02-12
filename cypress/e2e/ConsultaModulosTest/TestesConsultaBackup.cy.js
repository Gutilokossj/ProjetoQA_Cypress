Cypress.on('uncaught:exception', (err, runnable) => {
  // Não falhe o teste se o erro for relacionado à propriedade 'style' 
  if (err.message.includes("Cannot read properties of null (reading 'style')")) {
      return false; // Suprime o erro
  }
  return true;
});

  describe('Teste consultas possíveis para o usuário', () => {

    context('Testes que precisam do index.html', () => {
        beforeEach(() => {
            cy.visit('http://127.0.0.1:5500/docs/index.html');
        });

        it('Cliente SIEM - CNPJ', () => {
            cy.get('#cnpj').type('03.008.433/0001-81');
            cy.get('#consultaBKP').click();
            cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
        });

        it('Cliente SIEM - CNPJ - TESTE RESET ENVIO XML (SEM RESETAR)', () => {
            cy.get('#cnpj').type('03.008.433/0001-81');
            cy.get('#consultaBKP').click();
            cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');

            cy.get('#resetaXML').should('be.visible').click();
            cy.get('#cancelReset').should('be.visible').click();
        });

        it('Cliente GA - CNPJ', () => {
            cy.get('#cnpj').type('10.738.886/0001-29');
            cy.get('#consultaBKP').click();
            cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
        });

        it('Cliente GA - CNPJ TESTE RESET ENVIO XML (SEM RESETAR)', () => {
            cy.get('#cnpj').type('10.738.886/0001-29');
            cy.get('#consultaBKP').click();
            cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');

            cy.get('#resetaXML').should('be.visible').click();
            cy.get('#cancelReset').should('be.visible').click();
        });
    });

    context('Testes que NÃO precisam do index.html', () => {
        it('Cliente SIEM - BACKUP - DETALHES', () => {
            cy.visit('http://127.0.0.1:5500/docs/resultado.html?cnpj=03008433000181');

            cy.wait(2000);
            cy.get('#exibeDetalhes').should('be.visible').click();
            cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
        });

        it('Cliente GA - ENVIO XML - DETALHES', () => {
            cy.visit('http://127.0.0.1:5500/docs/resultado.html?cnpj=10738886000129');

            cy.wait(2000);
            cy.get('#exibeDetalhes').should('be.visible').click();
            cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
        });
    });

}); 