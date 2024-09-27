describe('Teste consultas possíveis para o usuário', () => {


  it('Cliente SIEM - CNPJ', () => {
    cy.visit('https://consulta-bkp.vercel.app/index.html');
    cy.get('#cnpj').type('03.008.433/0001-81');
    cy.get('#consultarModulosBtn').click();
    cy.wait(2000);
    cy.url().should('equal','https://consulta-bkp.vercel.app/resultado.html?cnpj=03008433000181');
  })

  it('Cliente SIEM - CPF', () => {
    cy.visit('https://consulta-bkp.vercel.app/index.html');
    cy.get('#cnpj').type('634.572.703-25');
    cy.get('#consultarModulosBtn').click();
    cy.wait(2000);
    cy.url().should('equal','https://consulta-bkp.vercel.app/resultado.html?cnpj=63457270325');
  })

  it('Cliente SIEM - BACKUP - DETALHES', () => {
    cy.visit('https://consulta-bkp.vercel.app/resultado.html?cnpj=03008433000181');
    cy.wait(2000);
    cy.get('#exibeDetalhes').click();
    cy.url().should('equal', 'https://consulta-bkp.vercel.app/resultado_BKP.html?cnpj=03008433000181');
    cy.wait(2000);
  });

  it('Cliente GA - CNPJ', () => {
    cy.visit('https://consulta-bkp.vercel.app/index.html');
    cy.get('#toggleButton').click();
    cy.wait(1000);
    cy.get('#cnpj').type('13.094.739/0001-51');
    cy.get('#consultarModulosBtn').click();
    cy.wait(2000);
    cy.url().should('equal','https://consulta-bkp.vercel.app/resultado.html?cnpj=13094739000151');
  });

  it('Cliente GA - CPF', () => {
    cy.visit('https://consulta-bkp.vercel.app/index.html');
    cy.get('#toggleButton').click();
    cy.wait(1000);
    cy.get('#cnpj').type('025.695.438-02');
    cy.get('#consultarModulosBtn').click();
    cy.wait(2000);
    cy.url().should('equal','https://consulta-bkp.vercel.app/resultado.html?cnpj=02569543802');
  });

  it('Cliente GA - ENVIO XML - DETALHES', () => {
    cy.visit('https://consulta-bkp.vercel.app/index.html');
    cy.get('#toggleButton').click();
    cy.wait(1000);
    cy.get('#cnpj').type('10.738.886/0001-29')
    cy.get('#consultarModulosBtn').click();
    cy.wait(2000);
    cy.url().should('equal','https://consulta-bkp.vercel.app/resultado.html?cnpj=10738886000129');
    cy.wait(2000);
    cy.get('#exibeDetalhes').click();
    cy.url().should('equal', 'https://consulta-bkp.vercel.app/resultado_BKP.html?cnpj=10738886000129');
    cy.wait(2000);
  });

})