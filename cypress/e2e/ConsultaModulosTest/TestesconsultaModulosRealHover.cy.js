describe('Teste realhover', () => {

    beforeEach(() => {
        cy.visit('https://consulta-bkp.vercel.app/index.html')
    });

    it('Testando RealHover no consultaMódulos', () => {
        cy.get('#consultarModulosBtn').realHover()
    });
    
});