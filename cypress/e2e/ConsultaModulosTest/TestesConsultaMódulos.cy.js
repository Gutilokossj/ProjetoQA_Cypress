describe('Teste consultas possíveis para o usuário', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/docs/index.html')
  });

  it('Cliente SIEM - CNPJ', () => {
    cy.get('#cnpj').type('03.008.433/0001-81');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=03008433000181');
  })

  it('Cliente SIEM - CPF', () => {
    cy.get('#cnpj').type('634.572.703-25');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=63457270325');
  })

  it('Cliente SIEM - BACKUP - DETALHES', () => {
    cy.visit('http://127.0.0.1:5500/docs/resultado.html?cnpj=03008433000181');
    cy.get('#exibeDetalhes').click();
    cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=03008433000181');
  });

  it('Cliente GA - CNPJ', () => {
    cy.get('#toggleButton').click();
    cy.get('#cnpj').type('13.094.739/0001-51');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=13094739000151');
  });

  it('Cliente GA - CPF', () => {;
    cy.get('#toggleButton').click();
    cy.get('#cnpj').type('025.695.438-02');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=02569543802');
  });

  it('Cliente GA - ENVIO XML - DETALHES', () => {
    cy.get('#toggleButton').click();
    cy.get('#cnpj').type('10.738.886/0001-29')
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=10738886000129');
    cy.get('#exibeDetalhes').click();
    cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultado_BKP.html?cnpj=10738886000129');
  });

  it('Verifica página de créditos', () => {
    cy.get('.footer-link').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/creditos.html');  
  })

})