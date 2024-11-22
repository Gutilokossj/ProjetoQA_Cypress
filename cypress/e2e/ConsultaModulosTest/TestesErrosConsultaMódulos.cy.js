describe('Teste erros possúveis para o usuário', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/docs/index.html')
    });

    it('Erro digitação, validação CNPJ INCOMPLETO', () => {
        cy.get('#cnpj').type('03.008.433/0001-1');
        cy.get('#consultarModulosBtn').click();
        cy.contains('#errorMessage', 'CNPJ ou CPF inválido. Verifique e tente novamente.');
    });

    it('Erro digitação, validação CPF INCOMPLETO', () => {
        cy.get('#cnpj').type('634.572.703-2');
        cy.get('#consultarModulosBtn').click();
        cy.contains('#errorMessage', 'CNPJ ou CPF inválido. Verifique e tente novamente.');
    });

    it('Erro digitação, validação EM BRANCO', () => {
        cy.get('#consultarModulosBtn').click();
        cy.contains('#errorMessage', 'CNPJ ou CPF inválido. Verifique e tente novamente.');
    });

    it('Erro consulta, CNPJ CANCELADO/INATIVO', () => {
        cy.get('#cnpj').type('13.094.739/0001-51');
        cy.get('#consultarModulosBtn').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/erroCancelado.html');
    });

    //it('Erro consulta, CNPJ DEVENDO', () => {
        //cy.get('#cnpj').type('08354004333');
        //cy.get('#consultarModulosBtn').click();
        //cy.url().should('include', 'http://127.0.0.1:5500/docs/erroDevendo.html');
    //});

    it('Erro consulta - NÃO TEM BACKUP', () => {
        cy.visit('http://127.0.0.1:5500/docs/resultado.html?cnpj=10251142000185')
        cy.get('#exibeDetalhes').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/erro.html');
      });
    
});