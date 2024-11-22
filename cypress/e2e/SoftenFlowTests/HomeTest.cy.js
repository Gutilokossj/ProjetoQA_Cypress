Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')
});

it('Teste Favorito', () => {
    cy.wait(1000);

    // Passo 1: Localiza o ícone de estrela desmarcada
    cy.get('.flex.flex-col.gap-16')
        .contains('Enrollments') // Encontra o texto
        .parent('div') // Vai para o pai
        .find('ul')
        .find('li').first() // Pega o primeiro <li>
        .find('a')
        .find('svg')
        .first()
        .invoke('show')
        .should('be.visible')
        .then(($svg) => {
            // Verifica se já está marcada
            if ($svg.hasClass('text-yellow-400')) {
                // Se já estiver marcada, desmarque
                cy.wrap($svg).click(); // Desmarcar
                cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada

                // Após desmarcar, precisamos garantir que o SVG estará visível antes de marcar novamente
                cy.wrap($svg)
                    .invoke('show') // Torna o SVG visível
                    .realHover() // Simula o hover no elemento
                    .should('be.visible') // Verifica que o SVG está visível após o hover
                    .click(); // Marca novamente
            } else
                // Marque a estrela, caso ainda não esteja marcada
                cy.wrap($svg).click();
        });


        //Verifica se ficou como favorito
        cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
        .should('exist')

        //Testa filtro de favoritos

});