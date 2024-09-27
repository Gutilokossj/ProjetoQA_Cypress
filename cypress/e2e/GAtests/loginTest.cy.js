const { login } = require("../support/utils/utils");

describe('TestesLogin', () => {

    it('LoginEmpresaUnica', () => {
        login();
    });

    it('LoginMultiEmpresa', () => {
        const cnpj = '23.319.602/0001-01';
        login(cnpj);   
    });

});