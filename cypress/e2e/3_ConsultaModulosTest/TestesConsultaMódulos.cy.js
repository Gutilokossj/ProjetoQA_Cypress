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
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=03008433000181');
  })

  it('Cliente SIEM - CPF', () => {
    cy.get('#cnpj').type('634.572.703-25');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=63457270325');
  })

  it('Cliente GA - CNPJ', () => {
    cy.get('#cnpj').type('13.094.739/0001-51');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=13094739000151');
  });

  it('Cliente GA - CPF', () => {;
    cy.get('#cnpj').type('025.695.438-02');
    cy.get('#consultarModulosBtn').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/resultado.html?cnpj=02569543802');
  });

  it('Verifica página de créditos', () => {
    cy.get('.footer-link').click();
    cy.url().should('equal','http://127.0.0.1:5500/docs/creditos.html');  
  })

})