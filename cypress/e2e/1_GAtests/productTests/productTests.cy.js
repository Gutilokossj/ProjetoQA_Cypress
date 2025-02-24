import {loginSession, registerProduct, registerSimplifiedProduct, saveProduct} from './utilsProduct/utils';

Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Teste Cadastro de Produtos', () => {
  
    beforeEach(() => {
        loginSession();
        cy.viewport(1400, 850)
    });

//     it('Cadastrar - Produto Simplificado', () => {
//       registerSimplifiedProduct("AUTOMÁTICO - FANTA LARANJA 2L"," / ABRAÇADEIRAS","LT","22021000","3,75","5,0");
//       saveProduct();
//   });

    it('Cadastrar - Produto Completo', () => {
      registerProduct("AUTOMÁTICO - PS5","SONY","FORNECEDOR","09.168.522/0001-71", "Estoque externo e faturamento interno",
        " / DIVERSOS","UN","100","550,00","156,00", 
        "Descrição complementar automática, teste! #$%¨&*()_+_-1021290.;,;.~´~´//~"
        ,"Teste OBS AUTOMÁTICA, teste! #$%¨&*()_+_-1021290.;,;.~´~´//~ ", "95045000", "2107900", "4", "999", "102", "3,75", 
        "2,66","7,00");
     });

});


