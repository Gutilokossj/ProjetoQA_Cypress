const { login } = require("../../support/utils/utils");

describe('TestesLogin', () => {

    it('LoginEmpresaUnica', () => {
        login();
    });

    it('LoginMultiEmpresa', () => {
        login();   
    });

});