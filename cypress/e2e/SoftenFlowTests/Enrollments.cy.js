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

    it('Teste - Enrollments - Layout - Button Selection', () => {

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

 
        // Arraste o elemento para o destino
        cy.get('li[title="Button selection"]').drag('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');
        
        
        cy.get('.col-span-6.md\\:col-span-6.\\!col-span-6')
        .find('input').type('Campo opção - teste')

        cy.get('.col-span-6.flex.flex-col.gap-2')
        .find('input').type('Opção 1 {enter}') //Para dar um enter após escrever, é bom lembrar
        .type('Opção 2 {enter}')

        //Deixar "Required Field" marcado
        cy.contains('span', 'Required Field').click();

        //Deixar "Editable Field" desmarcado
        cy.contains('span', 'Editable Field').click();

        //Salvar o input
        cy.get('.absolute.bottom-2.left-0.flex.w-full.justify-end.gap-4.rounded-b-xl.p-4')
            .find('button')
            .contains('Save')
            .should('not.be.disabled') // Verificar se o botão não está desabilitado
            .should('have.css', 'pointer-events', 'auto') // Verificar se o botão pode ser clicado
            .click({ force: true }); // Força o clique, ignorando o overflow ou outros fatores de visibilidade

        //Salvar input criado novamente
            cy.get('.flex.flex-1.items-center.justify-end.gap-2')
                .find('button')
                .contains('Save')
                .click()

        // Verificar se o elemento está visível após o clique
            cy.wait(1000)

            cy.get('span.font-sans.font-bold')  // Seleciona o <span> com as classes principais
            .should('be.visible');
    });

