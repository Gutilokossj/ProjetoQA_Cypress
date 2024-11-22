Cypress.on('uncaught:exception', (err, runnable) => {
    // Não falhe o teste se o erro for relacionado à propriedade 'style' 
    if (err.message.includes("Cannot read properties of null (reading 'style')")) {
        return false; // Suprime o erro
    }
    return true;
  });

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
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/erroCancelado.html?cnpj=13094739000151');
    });

    it('Erro consulta, CNPJ DEVENDO', () => {
        cy.get('#cnpj').type('30.688.045/0001-61');
        cy.get('#consultarModulosBtn').click();
        cy.url().should('include', 'http://127.0.0.1:5500/docs/erroDevendo.html?cnpj=30688045000161');
    });

    it('Erro consulta - NÃO TEM BACKUP', () => {
        cy.get('#cnpj').type('10.251.142/0001-85'); // CNPJ de teste
        cy.get('#consultarModulosBtn').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultado.html?cnpj=10251142000185');
        
        cy.wait(2000); // Aguarde mais tempo, se necessário, para garantir que o redirecionamento ocorra.
        
        cy.get('#exibeDetalhes').should('be.visible').click();
        
        // Aguardar que a URL final seja a do erro
        cy.location('pathname').should('eq', 'http://127.0.0.1:5500/docs/erro.html');
    });
    
    
});