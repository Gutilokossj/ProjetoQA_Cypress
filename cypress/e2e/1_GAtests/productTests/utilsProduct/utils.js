import { should } from "chai";

export function loginSession() {
    const email = Cypress.env('email');
    const password = Cypress.env('password');

    cy.session(['user-session'], () => {
        cy.visit("/entrar")

        cy.get('#email', { log: false })
        .invoke('val', email)
        .trigger('input') // Simula um evento de entrada para que o sistema reconheça
        .should('have.value', email);
        cy.get('#senhaLogin', { log: false})
        .invoke('val', password)
        .trigger('input')
        .should('have.value', password);

        cy.wait(500)
        cy.get('#entrar').click();

        cy.get('#frmTabela\\:dtTabela_data')
            .find('tr')
            .contains('td', '475.351.888-42')  // Localiza a <td> que contém o CPF
            .parent()  // Vai até o <tr> pai
            .find('td')  // Busca todas as <td> dentro dessa linha
            .wait(500)
            .find('a').contains('Acessar').click()  // Busca por "Acessar" na <td>
    });
}

export function registerSimplifiedProduct(nome, categoria, unidadeMedida, ncm, vlCusto, margemVenda) {
    cy.visit('/produto/');

    cy.get('.ga-btn-group')
      .find('button', 'frmTabela:cadastrosProduto')
      .wait(500)
      .click()
      .wait(500);
    cy.get('.ui-menuitem-text').contains("Cadastro Simplificado").should('be.visible').click();
    cy.url().should('include','produto-simplificado/novo');
        cy.get('#frmTabelaProd\\:nome').type(nome);
        cy.get('#frmTabelaProd\\:listaCat')
          .find('.ui-icon.ui-icon-triangle-1-s.ui-c').click()
          .wait(500);;
        cy.get('#frmTabelaProd\\:listaCat_items').should('be.visible')        
          .find('li').contains(categoria)
          .click();
        cy.get('#frmTabelaProd\\:unid').clear().type(unidadeMedida);
        cy.get('#frmTabelaProd\\:ncm').clear().type(ncm);
        cy.get('#frmTabelaProd\\:ncm').should('have.value', ncm);
        cy.get('#frmTabelaProd\\:vlcusto').clear().type(vlCusto);
        cy.get('#frmTabelaProd\\:vlcusto').should('have.value', vlCusto);
        cy.get('#frmTabelaProd\\:margemVenda').clear().wait(500);
        cy.get('#frmTabelaProd\\:margemVenda').type(margemVenda);
        cy.get('#frmTabelaProd\\:vlvenda').click();
}

export function saveProduct(){
    cy.contains('#frmTabelaProd\\:salva > .ui-button-text', 'Salvar').should('be.visible').wait(1000);
    cy.get('#frmTabelaProd\\:salva > .ui-button-text').click();

    cy.wait(500)
    cy.get('.ui-messages-info ui-corner-all')
      .find('ul')
      .find('li').contains('Salvo com sucesso')
}