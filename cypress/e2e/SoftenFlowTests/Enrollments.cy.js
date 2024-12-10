Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')

    // Incrementa a variável antes de cada teste
    formCounter++;

});

        // Variável global para controlar o contador
        let formCounter = 0;


describe('Teste Enrollments', () => {

    it('Novo - Enrollments Vazio', () => {

         // Recupera o contador do localStorage e faz parse corretamente
        cy.window().then((window) => {
        let formCounter = parseInt(window.localStorage.getItem('formCounter'), 10);
        if (isNaN(formCounter)) formCounter = 0; // Se for NaN, define como 0

        // Gera o próximo nome
        const formName = `Auto form ${formCounter + 1}`;

        cy.wait(1000);
    
        cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Enrollments')
            .parent('div')
            .find('span')
            .first()
            .find('.itens-center.flex.h-fit.w-fit.justify-center.rounded-lg.bg-blue-600.p-2.text-white').should('be.visible')
            .click()

            //Buscando input e digitando o nome do Enrollments
            cy.wait(1000);

            // Interage com o campo e preenche o valor
            cy.get('input[name="title"]').type(formName);

            // Salva o contador atualizado no localStorage
            window.localStorage.setItem('formCounter', (formCounter + 1).toString());

            //Comentado por enquanto Até diego arrumar a página!
        
            // cy.get('button').contains('Start').click()

            //Verifica se mudou para outra URL dos formulários

            // cy.url().should('include', '/forms/');

        });

    });

    it('Novo - Enrollments Importando Tabela', () => {

            const formName = `Auto form ${formCounter}`;
       
               cy.wait(1000);
           
               cy.get('.flex.flex-col.gap-16')
                   .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                   .contains('Enrollments')
                   .parent('div')
                   .find('span')
                   .first()
                   .find('.itens-center.flex.h-fit.w-fit.justify-center.rounded-lg.bg-blue-600.p-2.text-white').should('be.visible')
                   .click()
       
                   cy.wait(1000);
       
                   cy.get('input[name="title"]').type(formName);

                   cy.get('input[value="Importar Tabela"]')
                   .click();
       
                   cy.get('button').contains('Start').click()

                   cy.wait(1000)

                   cy.get('.grid.select-none.grid-cols-1.gap-3.md\\:grid-cols-3')
                   .find('li')
                   .first()
                   .click()

                   // Salva o contador atualizado no localStorage
                   window.localStorage.setItem('formCounter', (formCounter + 1).toString());

                //    cy.get('button').contains('Start')
                //      .click()

                //    cy.wait(1000)

                //    cy.url().should('include', '/forms/');
       
            });
 
    });