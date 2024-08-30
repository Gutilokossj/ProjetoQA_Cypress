import {inactivateProducts, loginSession} from '../support/utils/utils';

describe('InativaProdutoGA', () => {

    beforeEach(() => {
        loginSession();
        cy.visit('/dashboard/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log('Uncaught exception:', err);
            return false;
        });
    });

    it('InativarTodosOsProdutos', () => {
        
            inactivateProducts();
    });

});