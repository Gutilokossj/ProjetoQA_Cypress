Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')
});

describe('Enrollments (form)', () => {

    it('Teste Favorito', () => {
        cy.wait(1000);
        cy.get('.flex.flex-col.gap-16') // Define o contexto
            .contains('Enrollments') // Encontra o texto
            .parent('div') // Vai para o pai
            .find('ul') // Encontra a <ul>
            .find('li').first() // Pega o primeiro <li>
            .realHover() // Hover no elemento
            .find('svg.hidden.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
            .click()


    });
    
    
});