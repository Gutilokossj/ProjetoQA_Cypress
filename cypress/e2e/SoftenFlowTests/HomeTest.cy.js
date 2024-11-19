Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')
});

describe('Enrollments (form)', () => {

    it('Teste Favorito', () => {
        cy.wait(1000)
        cy.get('.flex.flex-col.gap-16')
        .contains('Enrollments')
        .parent('div')
        .find('ul')
        .find('li').first()
        .find('a')
    });
    
});