Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1920, 1080)
  });

//   describe('Teste de cadastro', () => {

//         it('Cadastro Enrollments - Vazio', () => {
//             cadastrarProximoEnrollmentsVazio();
//         });

//         it('Cadastro Enrollments - Importar Tabela', () => {
//             cadastrarProximoEnrollmentsImportartabela();
//         });

//            it('Cadastro Kanban - Vazio', () => {
//                cadastrarProximoKanbanVazio();
//            });
    
//   });

  describe('Testes de Exclusão', () => {
        
        it('Teste exclusão Enrollments', () => {
            excluirProximoFormulario();
        });

    });
    
//Funções

  function cadastrarProximoEnrollmentsVazio(){
    const maxTentativasCadastrarEnrollmentsVazio = 10; // Define um limite para evitar o loop infinito

    for (let tentativaCadastroEnrollments = 0; tentativaCadastroEnrollments < maxTentativasCadastrarEnrollmentsVazio; tentativaCadastroEnrollments++) {
    
    // Gera um nome único baseado no timestamp
    const formName = `Auto Form ${Date.now()}`;

    cy.visit('/');

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

            cy.get('input[name="title"]').should('have.value', formName);

            cy.intercept('POST', '**/enrollment').as('postEnrollment'); // Intercepta a requisição pra garantir que ele espere a resposta do servidor.
        
            cy.get('button').contains('Start').click()

            cy.wait('@postEnrollment', { timeout: 10000 }).its('response.statusCode').should('eq', 201); // Aguarda o POST correto

            //Verificar alteração de URL
            cy.url().should('include', '/forms/');

            cy.wait(500);
    }
}

  function cadastrarProximoEnrollmentsImportartabela(){
    const maxTentativasCadastrarEnrollmentsImporta = 10;

    for (let tentativasCadastroEnrollmentsImporta = 0; tentativasCadastroEnrollmentsImporta < maxTentativasCadastrarEnrollmentsImporta; tentativasCadastroEnrollmentsImporta++) {

        const formName = `Auto Form ${Date.now()}`;

               cy.visit('/');
           
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

                   cy.get('input[name="title"]').should('have.value', formName);

                   cy.get('input[value="Importar Tabela"]').click();
       
                   cy.get('button').contains('Start').click()

                   cy.wait(1000)

                   cy.get('.grid.select-none.grid-cols-1.gap-3.md\\:grid-cols-3')
                   .find('li')
                   .first()
                   .click()

                   cy.get('button').contains('Start')
                     .click()

                   cy.wait(1000)

                   cy.get('.border-col.rounded-t-xl.border-b.bg-white.px-4.py-2.font-spartan.text-lg.dark\\:border-dark-500.dark\\:bg-dark-700.flex.items-center.justify-between.py-4')
                        .eq(1)
                        .find('label')
                        .contains('Enrollments').should('be.visible')

                    // Arraste o elemento para o destino
                    cy.get('.relative.col-span-12.grid.h-full.grid-cols-6.gap-4.p-8.dark\\:bg-dark-700.lg\\:col-span-3')
                    .find('ul')
                    .find('li').eq(1)
                    .dragTo('.col-span-6.gap-4');
                            
                    cy.wait(500);  // Ajuste o tempo conforme necessário

                    cy.get('.flex.justify-end.gap-4').eq(4)
                    .find('button').contains('Save')
                    .scrollIntoView()
                    .click()

                    cy.wait(500);
    }
 }

  function cadastrarProximoKanbanVazio(){
    const maxTentativasCadastrarKanbanVazio = 10;

    for (let tentativasCadastroKanbanVazio = 0; tentativasCadastroKanbanVazio < maxTentativasCadastrarKanbanVazio; tentativasCadastroKanbanVazio++) {
        
        // Gera um nome único baseado no timestamp
    const formName = `Auto Kanban ${Date.now()}`;

    cy.visit('/');

    cy.get('.flex.flex-col.gap-16')
        .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
        .contains('Kanban')
        .parent('div')
        .find('span')
        .first()
        .find('.itens-center.flex.h-fit.w-fit.justify-center.rounded-lg.bg-blue-600.p-2.text-white').should('be.visible')
        .click()

        //Buscando input e digitando o nome do Enrollments
            cy.wait(1000);

            // Interage com o campo e preenche o valor
            cy.get('input[name="title"]').type(formName);

            cy.get('input[name="title"]').should('have.value', formName);

            //Comentado por enquanto Até diego arrumar a página!

            cy.intercept('POST', '**/kanban').as('postKanban'); // Intercepta a requisição
        
            cy.get('button').contains('Start').click()

            cy.wait('@postKanban', { timeout: 10000 }); // Aguarda a resposta do servidor

            //Verificar alteração de URL
            cy.url().should('include', '/kanban/');

            cy.wait(500);    
        
    }
  }

  function excluirProximoFormulario() {

    const maxTentativasExcluir = 20;
    for (let tentativaExclusãoEnrollments = 0; tentativaExclusãoEnrollments < maxTentativasExcluir; tentativaExclusãoEnrollments++) {


        cy.get('.flex.flex-col.gap-16')
        .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
        .contains('Enrollments')
        .parent('div')
        .find('li').eq(1)
        .should('exist')  // Garante que o <li> existe no DOM
        .then(($li) => {
            if ($li.length === 0) {
                cy.log('Nenhum formulário restante.');
                return;  // Sai da função
            }

            // Agora que sabemos que há <li>s, prossegue para o primeiro

            cy.wrap($li.first()).click();  // Abre o primeiro formulário

            cy.get('.flex.h-full.max-h-full.flex-col.overflow-y-auto')
                .find('ul').eq(1)
                .find('li').eq(3)
                .click();

            cy.get('.select-none.text-gray-800.dark\\:text-gray-400.bg-slate-300.dark\\:bg-dark-700.py-1.px-2.rounded-md.mx-1')
                .invoke('text')
                .then((formName) => {

                    const trimmedName = formName.trim(); // Remove espaços extras

                                if (!trimmedName) {  
                                    cy.log('Nome do formulário está vazio, apenas confirmando.');

                                    // Apenas clica no botão "Confirm" sem digitar nada
                                    cy.get('.flex.justify-end.gap-4')
                                        .find('button')
                                        .contains('Confirm')
                                        .click();

                                    cy.wait(1000); // Aguarda um tempo antes de verificar novamente

                                    // Chama a função novamente para excluir o próximo formulário
                                    excluirProximoFormulario();
                                    return; // Interrompe a execução se o nome estiver vazio
                                }

                    cy.log('Nome do formulário:', trimmedName);

                    cy.get('input[type="text"]').type(trimmedName);

                    cy.get('.flex.justify-end.gap-4')
                        .find('button')
                        .contains('Confirm')
                        .click();

                    cy.wait(500);

            });
        });
    }
}

                    
