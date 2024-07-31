import {inactivateProducts, login} from '../support/utils/utils';
import { v4 as uuidv4 } from 'uuid';

describe('InativaProdutoGA', () => {

    beforeEach(() => {
        login();

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log('Uncaught exception:', err);
            return false;
        });
    });

    it('InativarTodosOsProdutos', () => {
        
            inactivateProducts();
    });

});