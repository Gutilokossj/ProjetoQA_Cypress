import { v4 as uuidv4 } from 'uuid';

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

    //Seleciona + Cadastro Simplificado
    cy.wait(500);
    cy.get('#frmTabela\\:cadastrosProduto').click()
      .wait(500);
    cy.get('.ui-menuitem-text').contains("Cadastro Simplificado").should('be.visible').click();

    //Verifica a troca de url
    cy.url().should('include','produto-simplificado/novo');

    //Inicia-se cadastro do produto
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

export function registerProduct(nome, marca, 
  fornecedor, cnpjFornecedor, tpEstoque, categoria, unidadeMedida, notfiEstoque, vlCusto, 
  margemVenda, descComple, obs, ncm, cest, origemCST, codExIpi, cfopPadrao, 
  apxMuni, apxEst, apxFed, codBarTrib, uniTrib, qtdTrib, codProdAnvisa,
cfopImposto, ufImposto, tpContribuinteImposto, tpCfopImposto){
    cy.visit('/produto/');
    cy.wait(500);

    //Seleciona Novo Produto
    cy.get('.ga-btn.ga-btn-primary.ga-btn-sm-block').contains("Novo Produto").click();

    //Verifica a troca de url
    cy.url().should('include', '/produto-editar/novo');
    
    //Inicia-se cadastro do produto
        const codigoBarraUnico = uuidv4().replace(/-/g, '').slice(0, 13);
        cy.get('#frmTabelaProd\\:barra').type(codigoBarraUnico);
          cy.get('#frmTabelaProd\\:nome').click();

          //Fechar mensagem de aviso código de Barras inválido
          cy.get('#frmTabelaProd\\:growl_container')
          .should('be.visible')
          .within(() => {
            cy.get('.ui-growl-icon-close').should('exist').invoke('show').click({ force: true });
          });
        
        cy.get('#frmTabelaProd\\:nome').type(nome);
        const codigoSkuUnico = uuidv4().replace(/-/g, '').slice(0, 5);
        cy.get('#frmTabelaProd\\:cref').clear().type(codigoSkuUnico);
        cy.get('#frmTabelaProd\\:marca').type(marca);
        cy.get('#frmTabelaProd\\:listaFornecedor_input').type(fornecedor).wait(500);
        cy.get('#frmTabelaProd\\:listaFornecedor_panel')
          .find('ul').find('li').contains(cnpjFornecedor).click();
        cy.get('.ga-col-sm-6.ga-col-xl-4.ga-form-group').contains("Tipo de Estoque/Faturamento")
          .parent('div')
          .find('.ui-icon.ui-icon-triangle-1-s.ui-c').wait(500).click();
        cy.get('#frmTabelaProd\\:j_idt116_items')
          .find('li').contains(tpEstoque).click();
        cy.get('#frmTabelaProd\\:listaCat')
          .find('.ui-icon.ui-icon-triangle-1-s.ui-c').click()
          .wait(500);
        cy.get('#frmTabelaProd\\:listaCat_items').should('be.visible')        
          .find('li').contains(categoria)
          .click();
        cy.get('#frmTabelaProd\\:unid').clear().type(unidadeMedida);
        cy.get('#frmTabelaProd\\:estoqueMinimo').clear().type(notfiEstoque);
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
    cy.get('.ui-messages-info.ui-corner-all')
      .find('ul')
      .find('li').contains('Salvo com sucesso')
}