import {loginSession, registerProduct, saveProduct } from '../../support/utils/utils';
import { v4 as uuidv4 } from 'uuid';

describe('CadastrarProdutoGA', () => {
  
    beforeEach(() => {
        loginSession();
        cy.visit('/dashboard/')
    });

    it('CadastrarProduto', () => {
      const uniqueBarcode = uuidv4().replace(/-/g, '').slice(0, 13); // Gera um código de barras único com 13 dígitos
      registerProduct(uniqueBarcode, "COCA COLA 2L", "COCA COLA", "12,40", "25,10", "22021000");

      saveProduct();
      
  });


});

