describe('Teste consultas possíveis para o usuário', () => {


    it('Cliente SIEM - CNPJ', () => {
      cy.visit('https://consulta-bkp.vercel.app/index.html');
      cy.get('#cnpj').type('03.008.433/0001-81');
      cy.get('#consultaBKP').click();
      cy.wait(2000);
      cy.url().should('equal','https://consulta-bkp.vercel.app/resultado_BKP.html?cnpj=03008433000181');
    })

      it('Cliente SIEM - CNPJ - TESTE RESET ENVIO XML (SEM RESETAR)', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#cnpj').type('03.008.433/0001-81');
        cy.get('#consultaBKP').click();
        cy.wait(2000);
        cy.url().should('equal','https://consulta-bkp.vercel.app/resultado_BKP.html?cnpj=03008433000181');
        cy.get('#resetaXML').click();
      })

      it('Cliente GA - CNPJ', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#toggleButton').click();
        cy.wait(1000);
        cy.get('#cnpj').type('10.738.886/0001-29');
        cy.get('#consultaBKP').click();
        cy.wait(2000);
        cy.url().should('equal','https://consulta-bkp.vercel.app/resultado_BKP.html?cnpj=10738886000129');
      });

      it('Cliente GA - CNPJ TESTE RESET ENVIO XML (SEM RESETAR)', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#toggleButton').click();
        cy.wait(1000);
        cy.get('#cnpj').type('10.738.886/0001-29');
        cy.get('#consultaBKP').click();
        cy.wait(2000);
        cy.url().should('equal','https://consulta-bkp.vercel.app/resultado_BKP.html?cnpj=10738886000129');
        cy.get('#resetaXML').click();
      });

})    