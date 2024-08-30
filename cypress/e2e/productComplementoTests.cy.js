import { addEtapa, loginSession, registerEtapa, registerProduct, saveProduct } from '../support/utils/utils';
import { v4 as uuidv4 } from 'uuid';

describe('CadastroProdutoGA', () => {

    beforeEach(() => {
        loginSession();
        cy.visit('/dashboard/')

        // Capturar exceções não capturadas e impedir que falhem o teste
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log('Uncaught exception:', err);
            return false; // Impedir que o Cypress falhe o teste
        });
    });

    it('CadastrarUmProdutoComplemento', () => {
        const uniqueBarcode = uuidv4().replace(/-/g, '').slice(0, 13);
        registerProduct(uniqueBarcode, "PIZZA DOS NAMORADOS", "ATELIE", "20,00", "150,0", "19023000");
        saveProduct();

        registerEtapa("ETP 1", "INGREDIENTES", "MASSA", "12,99");
        cy.wait(1000);
        addEtapa("ETP 1", "MOLHO TOMATE", "2,65");
        addEtapa("ETP 1", "LOMBO CANADENSE", "10");
        addEtapa("ETP 1", "CATUPIRY", "7,60");
        addEtapa("ETP 1", "BACON", "5,50");

        registerEtapa("ETP 2", "BORDAS", "CHEDDAR", "7,00");
        cy.wait(1000);
        addEtapa("ETP 2", "MUSSARELA", "7,00");
        addEtapa("ETP 2", "CATUPIRY", "7,00");
        addEtapa("ETP 2", "CHOCOLATE", "9,00");

        saveProduct();

    });

});