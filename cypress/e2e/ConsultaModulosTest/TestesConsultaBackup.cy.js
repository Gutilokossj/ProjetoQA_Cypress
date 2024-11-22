describe('Teste consultas possíveis para o usuário', () => {

    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/docs/index.html')
    });

    it('Cliente SIEM - CNPJ', () => {
      cy.get('#cnpj').type('03.008.433/0001-81');
      cy.get('#consultaBKP').click()
      cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
    })

      it('Cliente SIEM - CNPJ - TESTE RESET ENVIO XML (SEM RESETAR)', () => {
        cy.get('#cnpj').type('03.008.433/0001-81');
        cy.get('#consultaBKP').click();
        cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
        cy.get('#resetaXML').click();
        cy.get('#cancelReset').click();
      })

      it('Cliente GA - CNPJ', () => {
        cy.get('#toggleButton').click();
        cy.get('#cnpj').type('10.738.886/0001-29');
        cy.get('#consultaBKP').click();
        cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
      });

      it('Cliente GA - CNPJ TESTE RESET ENVIO XML (SEM RESETAR)', () => {
        cy.get('#toggleButton').click();
        cy.get('#cnpj').type('10.738.886/0001-29');
        cy.get('#consultaBKP').click();
        cy.url().should('equal','http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
        cy.get('#resetaXML').click();
        cy.get('#cancelReset').click();
      });

})    