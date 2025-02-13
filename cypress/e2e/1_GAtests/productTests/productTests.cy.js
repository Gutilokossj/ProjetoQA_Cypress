import {loginSession, registerSimplifiedProduct, saveProduct} from './utilsProduct/utils';
import { v4 as uuidv4 } from 'uuid';

Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Teste Cadastro de Produtos', () => {
  
    beforeEach(() => {
        loginSession();
        cy.viewport(1400, 850)
    });

    it('Cadastrar - Produto Simplificado', () => {
      registerSimplifiedProduct("AUTOMÁTICO - FANTA LARANJA 2L"," / ABRAÇADEIRAS","LT","22021000","3,75","5,0");

      saveProduct();
      
  });

    // it('Cadastrar - Produto Completo', () => {
    //     const uniqueBarcode = uuidv4().replace(/-/g, '').slice(0, 13); // Gera um código de barras único com 13 dígitos
    // });


});


