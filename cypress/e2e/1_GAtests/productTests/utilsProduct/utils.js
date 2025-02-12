export function login() {
    // Acesse variáveis de ambiente
    const email = Cypress.env('email');
    const password = Cypress.env('password');
        cy.visit("/entrar");
        cy.get('#email').clear()
        cy.get('#email', {log: false}).type(email, {log: false});
        cy.get('#senhaLogin', {log: false}).type(password, {log: false});
        cy.get('#entrar').click();
        
        cy.get('#frmTabela\\:dtTabela_data')
            .find('tr')
            .contains('td', '475.351.888-42')  // Localiza a <td> que contém o CPF
            .parent()  // Vai até o <tr> pai
            .find('td')  // Busca todas as <td> dentro dessa linha
            .find('a').contains('Acessar').click()  // Busca por "Acessar" na <td>
}

export function inactivateProducts(){
    cy.visit('/dashboard')
    cy.get('#menu > div.menu-corpo > ul > li').contains('span.menu-lista-texto', 'Cadastros').click();
    cy.get('#menu > div.menu-corpo > ul > li').contains('span.menu-lista-texto', 'Cadastros > ul > li').find('#menu-lista-nivel-2-link > span.menu-lista-nivel-2-texto','Produto').click();
    //cy.get('#menu > div.menu-corpo > ul > li:nth-child(2) > ul > li:nth-child(3) > a > span').click();
    cy.get('#frmTabela\\:busca').type("%%%");
    cy.get('#frmTabela\\:j_idt93').click();
    cy.get('#frmTabela\\:dtTabela\\:j_idt90 > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default').click();
    cy.get('#frmTabela\\:dtTabela_data > tr:nth-child(1) > td.ui-selection-column.ui-column-p-3 > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-active').click();
    cy.get('#frmTabela\\:btnMaisOpcoes').click();
    cy.get('#frmTabela\\:j_idt75 > ul > li:nth-child(1) > a > span.ui-menuitem-text').should('be.visible').click();
    cy.get('#frmConfirm\\:j_idt211').should('be.visible').click();

}