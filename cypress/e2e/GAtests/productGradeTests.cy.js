import {login, loginSession, registerGrades, registerProduct, saveProduct } from '../../support/utils/utils';
import { v4 as uuidv4 } from 'uuid';

describe('CadastrarProdutoGA', () => {

    beforeEach(() => {
        loginSession();
        cy.visit('/dashboard/')
    });

    it('CadastrarProdutoGrade', () => {
      const uniqueBarcode = uuidv4().replace(/-/g, '').slice(0, 13);
      registerProduct(uniqueBarcode,"CAMISETA","ADIDAS", "25,00", "70,0", "61091000");

      registerGrades("Tamanho Camiseta", "G", "Cor", "Branco", uniqueBarcode, "45,99");

      saveProduct();

});

})