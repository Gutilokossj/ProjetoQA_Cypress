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

    it('Erro consulta, CNPJ CANCELADO OU NÃO É CLIENTE', () => {
        cy.get('#cnpj').type('36.910.805/0005-43');
        cy.get('#consultarModulosBtn').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/erroCancelado.html?cnpj=36910805000543');
    });

    it('Erro consulta, CNPJ DEVENDO', () => {
        cy.get('#cnpj').type('30.688.045/0001-61');
        cy.get('#consultarModulosBtn').click();
        cy.url().should('include', 'http://127.0.0.1:5500/docs/erroDevendo.html?cnpj=30688045000161&expirationDate=02%2F02%2F2025');
    });

    it('Aviso consulta módulo SIEM - NÃO TEM BACKUP', () => {
        cy.get('#cnpj').type('10.251.142/0001-85'); // CNPJ de teste
        cy.get('#consultarModulosBtn').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultado.html?cnpj=10251142000185');
        
        cy.wait(2000); // Aguarde mais tempo, se necessário, para garantir que o redirecionamento ocorra.
        
        cy.get('#mensagemSemBackup').contains("Cliente não possui módulo de Backup em nuvem!").should('be.visible');    
    });

    it('Aviso consulta módulo GA - NÃO TEM ENVIO XML', () => {
        cy.get('#cnpj').type('12.862.008/0001-46'); // CNPJ de teste
        cy.get('#consultarModulosBtn').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/resultadoGA.html?cnpj=12862008000146');
        
        cy.wait(2000); // Aguarde mais tempo, se necessário, para garantir que o redirecionamento ocorra.
        
        cy.get('#mensagemSemBackup').contains("Cliente não utiliza envio xml automático!").should('be.visible');    
    });

    it('Aviso consulta BACKUP- NÃO TEM BACKUP', () => {
        cy.get('#cnpj').type('10.251.142/0001-85'); // CNPJ de teste
        cy.get('#consultaBKP').click();
        cy.url().should('equal', 'http://127.0.0.1:5500/docs/erro.html?cnpj=10251142000185');
        
        cy.wait(2000); // Aguarde mais tempo, se necessário, para garantir que o redirecionamento ocorra.
        
        cy.get('.message').contains("Desculpe, não encontrei nenhuma informação de BACKUP ou Envio XML, verifique os módulos habilitados!").should('be.visible');    
    });

    
});