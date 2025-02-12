Cypress.on('uncaught:exception', (err, runnable) => {
  // Não falhe o teste se o erro for relacionado à propriedade 'style' 
  if (err.message.includes("Cannot read properties of null (reading 'style')")) {
      return false; // Suprime o erro
  }
  return true;
});

describe('Teste consultas possíveis para o usuário', () => {

    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/docs/index.html')
    });

    it('Cliente SIEM - CNPJ', () => {
      cy.get('#cnpj').type('03.008.433/0001-81');
      cy.get('#consultaBKP').click()
      cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
      cy.wait(2500)
    })

    it('Cliente SIEM - CNPJ - TESTE RESET ENVIO XML (SEM RESETAR)', () => {
      cy.get('#cnpj').type('03.008.433/0001-81');
      cy.get('#consultaBKP').click();
      cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
      cy.wait(1000)

      // Espera até que o botão #resetaXML esteja visível antes de clicar
      cy.get('#resetaXML').should('be.visible').click();
      cy.wait(1000)
      // Espera até que o botão #cancelReset esteja visível antes de clicar
      cy.get('#cancelReset').should('be.visible').click();
  });

      it('Cliente GA - CNPJ', () => {
        cy.get('#cnpj').type('10.738.886/0001-29');
        cy.get('#consultaBKP').click();
        cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
        cy.wait(2500)
      });

      it('Cliente GA - CNPJ TESTE RESET ENVIO XML (SEM RESETAR)', () => {
        cy.get('#cnpj').type('10.738.886/0001-29');
        cy.get('#consultaBKP').click();
        cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
        cy.wait(1000)
  
        cy.get('#resetaXML').should('be.visible').click();
        cy.wait(1000)
        cy.get('#cancelReset').should('be.visible').click();
      });

})    