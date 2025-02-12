const { login } = require("./productTests/utilsProduct/utils");

describe('TestesLogin', () => {

    it('LoginEmpresaUnica', () => {
        login();
    });

    it('LoginMultiEmpresa', () => {
        login();   
    });

});