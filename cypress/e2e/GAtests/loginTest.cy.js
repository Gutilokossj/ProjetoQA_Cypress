const { login } = require("../../support/utils/utils");

describe('TestesLogin', () => {

    it('LoginEmpresaUnica', () => {
        login();
    });

    it('LoginMultiEmpresa', () => {
        const cnpj = '475.351.888-42';
        login(cnpj);   
    });

});