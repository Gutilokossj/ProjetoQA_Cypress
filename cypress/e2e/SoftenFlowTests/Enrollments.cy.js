Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/');
  });


describe('Teste Enrollments', () => {

    // it('Teste - Novo - Enrollments Vazio', () => {

    //     // Gera um nome único baseado no timestamp
    //     const formName = `Auto Form ${Date.now()}`;

    //     cy.wait(1000);
    
    //     cy.get('.flex.flex-col.gap-16')
    //         .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
    //         .contains('Enrollments')
    //         .parent('div')
    //         .find('span')
    //         .first()
    //         .find('.itens-center.flex.h-fit.w-fit.justify-center.rounded-lg.bg-blue-600.p-2.text-white').should('be.visible')
    //         .click()

    //         //Buscando input e digitando o nome do Enrollments
    //         cy.wait(1000);

    //         // Interage com o campo e preenche o valor
    //         cy.get('input[name="title"]').type(formName);

    //         cy.get('input[name="title"]').should('have.value', formName);

    //         //Comentado por enquanto Até diego arrumar a página!
        
    //         cy.get('button').contains('Start').click()

    //         //Verificar alteração de URL
    //         cy.url().should('include', '/forms/');

    // });

    // it('Teste - Novo - Enrollments Importando Tabela', () => {

    //     const formName = `Auto Form ${Date.now()}`;
       
    //            cy.wait(1000);
           
    //            cy.get('.flex.flex-col.gap-16')
    //                .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
    //                .contains('Enrollments')
    //                .parent('div')
    //                .find('span')
    //                .first()
    //                .find('.itens-center.flex.h-fit.w-fit.justify-center.rounded-lg.bg-blue-600.p-2.text-white').should('be.visible')
    //                .click()
       
    //                cy.wait(1000);
       
    //                cy.get('input[name="title"]').type(formName);

    //                cy.get('input[name="title"]').should('have.value', formName);

    //                cy.get('input[value="Importar Tabela"]').click();
       
    //                cy.get('button').contains('Start').click()

    //                cy.wait(1000)

    //                cy.get('.grid.select-none.grid-cols-1.gap-3.md\\:grid-cols-3')
    //                .find('li')
    //                .first()
    //                .click()

    //                cy.get('button').contains('Start')
    //                  .click()

    //                cy.wait(1000)

    //                cy.url().should('include', '/forms/');
       
    //         });
 
    });

    it('Teste - Enrollments - Layout', () => {

        cy.wait(1000);

        //Selecionar alguma LI CONTENDO "Auto Form" para testar

        cy.get('.flex.flex-col.gap-16')
                   .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                   .contains('Enrollments')
                   .parent('div')
                   .find('li')
                   .contains('Auto Form').should('be.visible')

                   .click()
                
                   cy.wait(1000)

                   cy.url().should('include', '/forms/')
                   

        //Selecionar o layout </>
        cy.get('.flex.h-full.max-h-full.flex-col.overflow-y-auto')
                .find('ul').first()
                .find('li').eq(1)
                .click()


        //Minimizar os Grids que não usamos ainda.
        cy.get('.sticky.top-0.flex.h-full.w-\\[300px\\].min-w-\\[300px\\].flex-col.rounded-xl.bg-gray-50.transition-\\[width\\,padding\\].duration-300.dark\\:bg-dark-700')
        .find('h2').contains('Grids').click()

        cy.get('.sticky.top-0.flex.h-full.w-\\[300px\\].min-w-\\[300px\\].flex-col.rounded-xl.bg-gray-50.transition-\\[width\\,padding\\].duration-300.dark\\:bg-dark-700')
        .find('h2').last().contains('Grids').click()

        

    });