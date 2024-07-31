export function login() {
    // Acesse variáveis de ambiente
    const email = Cypress.env('email');
    const password = Cypress.env('password');

    // Verifique se as variáveis estão corretas (opcional, para depuração)
    console.log('Email:', email);
    console.log('Password:', password);

    cy.visit("/entrar");

    cy.get('#email').type(email);
    cy.get('#senhaLogin').type(password);
    
    cy.get('#entrar').click();
    cy.get('#frmTabela\\:dtTabela_data tr:nth-child(1) td:nth-child(4) a').click();
}




export function registerProduct(barra, nome, marca, custo, margemVenda, ncm) {
    cy.get('#menu > div.menu-corpo > ul > li:nth-child(2) > a > span').click();
    cy.get('#menu > div.menu-corpo > ul > li:nth-child(2) > ul > li:nth-child(3) > a > span').click();
    cy.get('#frmTabela > div.ga-display-md-flex.ga-justify-content-between.ga-align-items-center > div.ga-mb-4.ga-text-md-right > div > a').click();
    cy.get('#frmTabelaProd\\:barra').type(barra);
    cy.get('#frmTabelaProd\\:nome').type(nome);
    cy.get('#frmTabelaProd\\:marca').type(marca);
    cy.get('#frmTabelaProd\\:vlcusto').clear().type(custo);
    cy.wait(1000);

    cy.get('#frmTabelaProd\\:margemVenda').clear();
    cy.wait(500);

    cy.get('#frmTabelaProd\\:margemVenda').then($input => {
        cy.wrap($input)
            .type(margemVenda.replace(',', '.'))
            .blur(); // Simula a perda de foco
    });

    // Use `cy.get` novamente para garantir que o valor seja atualizado e visível
    cy.get('#frmTabelaProd\\:margemVenda').invoke('val').then(val => {
        // Formate o valor recebido e compare com o valor esperado
        const formattedVal = val.replace(',', '.');
        expect(parseFloat(formattedVal)).to.equal(parseFloat(margemVenda.replace(',', '.')));
    });

    cy.wait(500);
    cy.get('#frmTabelaProd\\:ncm').clear().type(ncm);
    cy.get('#frmTabelaProd\\:ncm').should('have.value', ncm);
}


export function registerGrades(variante, variacao, variante1, variacao1, codBarra, valorVenda){
    cy.get('#frmTabelaProd\\:j_idt267').click();
    cy.get('#frmGrade\\:allVariante > div.ui-selectonemenu-trigger.ui-state-default.ui-corner-right > span').click();
    cy.get('#frmGrade\\:allVariante').should('be.visible');
    cy.wait(1000);
    cy.get('#frmGrade\\:allVariante_items').contains('li.ui-selectonemenu-item', variante).click();
    cy.wait(1000);
    cy.get('#frmGrade\\:j_idt884 > div.ui-selectonemenu-trigger.ui-state-default.ui-corner-right > span').click();
    cy.get('#frmGrade\\:j_idt884').should('be.visible');
    cy.wait(1000);
    cy.get('#frmGrade\\:j_idt884_items').contains('li.ui-selectonemenu-item', variacao).click();
    cy.get('#frmGrade\\:j_idt894 > i').click();

    cy.get('#frmGrade\\:allVariante1 > div.ui-selectonemenu-trigger.ui-state-default.ui-corner-right > span').click();
    cy.get('#frmGrade\\:allVariante1').should('be.visible');
    cy.wait(1000);
    cy.get('#frmGrade\\:allVariante1_items').contains('li.ui-selectonemenu-item', variante1).click();
    cy.wait(1000);
    cy.get('#frmGrade\\:j_idt1138 > div.ui-selectonemenu-trigger.ui-state-default.ui-corner-right > span').click();
    cy.get('#frmGrade\\:j_idt1138').should('be.visible');
    cy.wait(1000);
    cy.get('#frmGrade\\:j_idt1138_items').contains('li.ui-selectonemenu-item', variacao1).click();

    
    cy.get('#frmGrade\\:j_idt900').type(codBarra);

    cy.get('#frmGrade\\:valorcusto').clear().type(valorVenda);

    cy.wait(1000);
    cy.get('#frmGrade\\:j_idt908').click();

    cy.wait(1000);
    cy.get('#j_idt1015').click();
    
}

export function registerEtapa(etapa, descEtapa, descComplemento, valor){
    cy.wait(1000);
    cy.get('#frmTabelaProd\\:j_idt271').should('be.visible').click();
    cy.wait(500);
    cy.get('#frmDialogs\\:j_idt1081_input').type(etapa);
    cy.get('#frmDialogs\\:complementoItemEtapaDescricao').type(descEtapa);
    cy.get('#frmDialogs\\:j_idt1089').type(descComplemento)
    cy.wait(1000);
    cy.get('#frmDialogs\\:j_idt1093').clear().type(valor);
    cy.get('#frmDialogs\\:j_idt1103').click();
    cy.get('#frmDialogs\\:j_idt1124').click();
}

export function addEtapa(etapa, descComplemento, valor) {
    cy.get('#frmTabelaProd\\:j_idt271').should('be.visible').click();
    cy.get('#frmDialogs\\:j_idt1081 > button').should('be.visible').click();

    cy.get('#frmDialogs\\:j_idt1081_panel').should('be.visible');

    cy.get('#frmDialogs\\:j_idt1081_panel').contains('tr.ui-autocomplete-item', etapa).should('be.visible').click();
    cy.get('#frmDialogs\\:j_idt1089').type(descComplemento);
    cy.wait(1000);
    cy.get('#frmDialogs\\:j_idt1093').clear().type(valor);
    cy.get('#frmDialogs\\:j_idt1103').click();

    // Usar force: true para clicar no botão mesmo que esteja coberto
    cy.get('#frmDialogs\\:j_idt1124').click({ force: true });
}


export function saveProduct(){
    cy.contains('#frmTabelaProd\\:salva > .ui-button-text', 'Salvar').should('be.visible').wait(1000);
    cy.get('#frmTabelaProd\\:salva > .ui-button-text').click();

}

//APENAS PARA ESTUDO
export function inactivateProducts(){
    cy.get('#menu > div.menu-corpo > ul > li:nth-child(2) > a > span').click();
    cy.get('#menu > div.menu-corpo > ul > li:nth-child(2) > ul > li:nth-child(3) > a > span').click();
    cy.get('#frmTabela\\:busca').type("%%%");
    cy.get('#frmTabela\\:j_idt88').click();
    cy.get('#frmTabela\\:dtTabela\\:j_idt90 > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default').click();
    cy.get('#frmTabela\\:dtTabela_data > tr:nth-child(1) > td.ui-selection-column.ui-column-p-3 > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-active').click();
    cy.get('#frmTabela\\:btnMaisOpcoes').click();
    cy.get('#frmTabela\\:j_idt75 > ul > li:nth-child(1) > a > span.ui-menuitem-text').should('be.visible').click();
    cy.get('#frmConfirm\\:j_idt211').should('be.visible').click();

}
