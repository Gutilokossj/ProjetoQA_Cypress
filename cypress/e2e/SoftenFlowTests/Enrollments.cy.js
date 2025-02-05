Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1920, 1080)
  });


describe('Teste Enrollments', () => {


    it('Teste - Novo - Enrollments Vazio', () => {

        // Gera um nome único baseado no timestamp
        const formName = `Auto Form ${Date.now()}`;

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

            cy.get('input[name="title"]').should('have.value', formName);

            //Comentado por enquanto Até diego arrumar a página!
        
            cy.get('button').contains('Start').click()

            //Verificar alteração de URL
            cy.url().should('include', '/forms/');

    });

    it('Teste - Novo - Enrollments Importando Tabela', () => {

        const formName = `Auto Form ${Date.now()}`;
       
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
            });

    it('Teste - Enrollments - Layout - Button Selection', () => {
      
              navegarParaAutoForm();

              // Arraste o elemento para o destino
              cy.get('li[title="Button selection"]').dragTo('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');
      
              cy.wait(500);  // Ajuste o tempo conforme necessário
              
              cy.get('.col-span-6.md\\:col-span-6.\\!col-span-6')
              .find('input').type('Campo Button Selection - teste')
      
              cy.get('.col-span-6.flex.flex-col.gap-2')
              .find('input').type('Opção 1 Button {enter}') //Para dar um enter após escrever, é bom lembrar
              .type('Opção 2 Button {enter}')
      
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
                  .click(); // Força o clique, ignorando o overflow ou outros fatores de visibilidade
      
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

    it('Teste - Enrollments - Layout - Checkbox', () => {
      
            navegarParaAutoForm();

            // Arraste o elemento para o destino
            cy.get('li[title="Checkbox"]').dragTo('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');
    
            cy.wait(500);  // Ajuste o tempo conforme necessário
            
            cy.get('.col-span-6.md\\:col-span-6.\\!col-span-6')
            .find('input').type('CHECKBOX - teste')
    
            cy.get('.col-span-6.flex.flex-col.gap-2')
            .find('input').type('Opção 1 checkbox {enter}') //Para dar um enter após escrever, é bom lembrar
            .type('Opção 2 checkbox {enter}')
    
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
                .click(); // Força o clique, ignorando o overflow ou outros fatores de visibilidade
    
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

    it('Teste - Enrollments - Layout - Email Adress', () => {
      
          navegarParaAutoForm();

          // Arraste o elemento para o destino
          cy.get('li[title="Email address"]').dragTo('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');
  
          cy.wait(500);  // Ajuste o tempo conforme necessário
          
          cy.contains('label', 'Field Title')  // Localiza o label com o texto 'Field Title'
            .parent()  // Encontra o elemento pai, que deve ser o div
            .find('input')  // Localiza o input dentro do div
            .type('E-MAIL ANDRESS - teste') 

            cy.contains('label', 'Default Value')  // Localiza o label com o texto 'Field Title'
            .parent()  // Encontra o elemento pai, que deve ser o div
            .find('input')  // Localiza o input dentro do div
            .type('emailpadraoteste@gmail.com')
            
            cy.contains('label', 'Min Characters')  // Localiza o label com o texto 'Field Title'
            .parent()  // Encontra o elemento pai, que deve ser o div
            .find('input')  // Localiza o input dentro do div
            .clear()
            .type('3') 

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
              .click(); // Força o clique, ignorando o overflow ou outros fatores de visibilidade
  
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

    it('Teste - Enrollments - Layout - Long Text', () => {
      
        navegarParaAutoForm();

        // Arraste o elemento para o destino
        cy.get('li[title="Long text"]').dragTo('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');

        cy.wait(500);  // Ajuste o tempo conforme necessário
        
        cy.contains('label', 'Field Title')  // Localiza o label com o texto 'Field Title'
          .parent()  // Encontra o elemento pai, que deve ser o div
          .find('input')  // Localiza o input dentro do div
          .type('Long text testing, testing, hey! - teste') 

          cy.contains('label', 'Rows')  // Localiza o label com o texto 'Field Title'
          .parent()  // Encontra o elemento pai, que deve ser o div
          .find('input')  // Localiza o input dentro do div
          .clear()
          .type('1')
          
          cy.contains('label', 'Min Characters')  // Localiza o label com o texto 'Field Title'
          .parent()  // Encontra o elemento pai, que deve ser o div
          .find('input')  // Localiza o input dentro do div
          .clear()
          .type('5')
          
          cy.contains('label', 'Default Value')  // Localiza o label com o texto 'Field Title'
          .parent()  // Encontra o elemento pai, que deve ser o div
          .find('textarea')  // Localiza o input dentro do div
          .type('Value Default - teste') 

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
            .click(); // Força o clique, ignorando o overflow ou outros fatores de visibilidade

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

    it('Teste - Enrollments - Layout - Short Text', () => {
      
      navegarParaAutoForm();

      // Arraste o elemento para o destino
      cy.get('li[title="Short text"]').dragTo('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');

      cy.wait(500);  // Ajuste o tempo conforme necessário
      
      cy.contains('label', 'Field Title')  // Localiza o label com o texto 'Field Title'
        .parent()  // Encontra o elemento pai, que deve ser o div
        .find('input')  // Localiza o input dentro do div
        .type('Shor text - teste') 

        cy.contains('label', 'Default Value')  // Localiza o label com o texto 'Field Title'
        .parent()  // Encontra o elemento pai, que deve ser o div
        .find('input')  // Localiza o input dentro do div
        .type('Default short - teste')
        
        cy.contains('label', 'Min Characters')  // Localiza o label com o texto 'Field Title'
        .parent()  // Encontra o elemento pai, que deve ser o div
        .find('input')  // Localiza o input dentro do div
        .clear()
        .type('2')

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
          .click(); // Força o clique, ignorando o overflow ou outros fatores de visibilidade

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

   it('Teste - Enrollments - Layout - Single selection', () => {
      
    navegarParaAutoForm();

    // Arraste o elemento para o destino
    cy.get('li[title="Single selection"]').dragTo('.mx-0.transition-all.col-span-12.grid.grid-cols-12.gap-4.rounded-lg');

    cy.wait(500);  // Ajuste o tempo conforme necessário
    
    cy.contains('label', 'Field Title')  // Localiza o label com o texto 'Field Title'
      .parent()  // Encontra o elemento pai, que deve ser o div
      .find('input')  // Localiza o input dentro do div
      .type('Single selection - teste') 

      cy.contains('label', 'Options')  // Localiza o label com o texto 'Field Title'
      .parent()  // Encontra o elemento pai, que deve ser o div
      .find('input')  // Localiza o input dentro do div
      .type('Selection 1 {enter}')
      .type('Selection 2 {enter}')
      .type('Selection 3 {enter}')
      
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
        .click(); // Força o clique, ignorando o overflow ou outros fatores de visibilidade

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

    });


    //funções

    function navegarParaAutoForm() {

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
      
    }



