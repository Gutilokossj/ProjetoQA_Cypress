describe('Teste realhover', () => {

    beforeEach(() => {
        cy.visit('https://consulta-bkp.vercel.app/index.html')
    });

    it('Testando RealHover no consultaMódulos', () => {
        cy.get('#consultarModulosBtn').realHover()
    });

    it('Outro teste RealHover, elemento que aparece', () => {
        cy.get('#cnpj').type('01.120.191/0001-98')
        cy.get('#consultarModulosBtn').click()
        cy.url('equal', 'https://consulta-bkp.vercel.app/resultado.html?cnpj=01120191000198')
        cy.get('.licencaValue').should('be.visible')
        .realHover()
    });
    
});