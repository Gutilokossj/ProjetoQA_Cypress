describe('Teste erros possúveis para o usuário', () => {

    it('Erro digitação, validação CNPJ INCOMPLETO', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#cnpj').type('03.008.433/0001-1');
        cy.get('#consultarModulosBtn').click();
        cy.contains('#errorMessage', 'CNPJ ou CPF inválido. Verifique e tente novamente.');
        cy.wait(1000);
    });

    it('Erro digitação, validação CPF INCOMPLETO', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#cnpj').type('634.572.703-2');
        cy.get('#consultarModulosBtn').click();
        cy.contains('#errorMessage', 'CNPJ ou CPF inválido. Verifique e tente novamente.');
        cy.wait(1000);
    });

    it('Erro digitação, validação EM BRANCO', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#consultarModulosBtn').click();
        cy.contains('#errorMessage', 'CNPJ ou CPF inválido. Verifique e tente novamente.');
        cy.wait(1000);
    });

    it('Erro consulta, CNPJ CANCELADO/INATIVO', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#cnpj').type('13.094.739/0001-51');
        cy.get('#consultarModulosBtn').click();
        cy.url().should('equal', 'https://consulta-bkp.vercel.app/erroCancelado.html');
        cy.wait(2000);
    });

    it('Erro consulta, CNPJ DEVENDO', () => {
        cy.visit('https://consulta-bkp.vercel.app/index.html');
        cy.get('#cnpj').type('47.687.346/0001-73');
        cy.get('#consultarModulosBtn').click();
        cy.url().should('include', 'https://consulta-bkp.vercel.app/erroDevendo.html');
        cy.wait(2000);
    });

    it('Erro consulta - NÃO TEM BACKUP', () => {
        cy.visit('https://consulta-bkp.vercel.app/resultado.html?cnpj=10251142000185');
        cy.wait(2000);
        cy.get('#exibeDetalhes').click();
        cy.url().should('equal', 'https://consulta-bkp.vercel.app/erro.html');
        cy.wait(2000);
      });
    
});