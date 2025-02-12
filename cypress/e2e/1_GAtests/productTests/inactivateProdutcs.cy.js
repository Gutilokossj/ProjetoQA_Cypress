import { inactivateProducts, login} from './utilsProduct/utils';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erros de "cross origin script"
    if (err.message.includes('Script error')) {
      return false;
    }
  });

describe('InativarProdutoGA', () => {

    beforeEach(() => {
       login();
    });

    it('InativarTodosOsProdutos', () => {
            //inactivateProducts();
    });

});