import {inactivateProducts, loginSession} from '../support/utils/utils';

describe('InativarProdutoGA', () => {

    beforeEach(() => {
        loginSession();
        cy.visit('/dashboard/')

    });

    it('InativarTodosOsProdutos', () => {
            inactivateProducts();
    });

});