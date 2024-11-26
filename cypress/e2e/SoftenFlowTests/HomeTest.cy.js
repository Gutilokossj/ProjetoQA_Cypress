Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')
});

describe('Teste favorito', () => {

    it('Teste favorito Enrollments', () => {
        cy.wait(1000);
    
        cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Enrollments')
            .parent('div') // Vai para o pai
            .find('li').first()
            .find('a')
            .find('svg')
            .first()
            .invoke('show')
            .should('be.visible')
            .then(($svg) => {
                // Verifica se já está marcada
                if ($svg.hasClass('text-yellow-400')) {
                    // Se já estiver marcada, desmarque
                    cy.wrap($svg).click(); // Desmarcar
                    cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada
    
                    
                    cy.wrap($svg)
                        .invoke('show') // Torna o SVG visível
                        .realHover() // Simula o hover no elemento
                        .should('be.visible') // Verifica que o SVG está visível após o hover
                        .click(); // Marca novamente
                } else
                    // Marque a estrela, caso ainda não esteja marcada
                    cy.wrap($svg).click();
            });
    
    
            //Verifica se ficou como favorito
            cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
            .should('exist')
    
            //Testa filtro de favoritos
            cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Enrollments')
            .parent('div')
            .find('.group.flex.h-fit.w-fit.cursor-pointer.flex-row.items-center.gap-2.rounded-2xl.border.border-gray-300.bg-gray-300.p-2.transition-all.dark\\:border-dark-700.dark\\:bg-dark-700.lg\\:flex-col.hover\\:gap-2.lg\\:gap-0')
            .find('ul')
            .should('be.visible')
            .click()

            // Verifica se o atributo da classe mudou para "text-yellow-500"
            cy.get('svg') // Selecione o elemento correto
            .should('have.class', 'text-yellow-500')
    
    });

    it('Teste favorito Kanban', () => {
        cy.wait(1000);
    
        
        cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Kanban')
            .parent('div') // Vai para o pai
            .find('ul')
            .find('li').first()
            .find('a')
            .find('svg')
            .first()
            .invoke('show')
            .should('be.visible')
            .then(($svg) => {
                // Verifica se já está marcada
                if ($svg.hasClass('text-yellow-400')) {
                    // Se já estiver marcada, desmarque
                    cy.wrap($svg).click(); // Desmarcar
                    cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada
    
                    
                    cy.wrap($svg)
                        .invoke('show') // Torna o SVG visível
                        .realHover() // Simula o hover no elemento
                        .should('be.visible') // Verifica que o SVG está visível após o hover
                        .click(); // Marca novamente
                } else
                    // Marque a estrela, caso ainda não esteja marcada
                    cy.wrap($svg).click();
            });
    
    
            //Verifica se ficou como favorito
            cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
            .should('exist')
    
            //Testa filtro de favoritos
            cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Kanban')
            .parent('div')
            .find('.group.flex.h-fit.w-fit.cursor-pointer.flex-row.items-center.gap-2.rounded-2xl.border.border-gray-300.bg-gray-300.p-2.transition-all.dark\\:border-dark-700.dark\\:bg-dark-700.lg\\:flex-col.hover\\:gap-2.lg\\:gap-0')
            .find('ul')
            .should('be.visible')
            .click()
    
            // Verifica se o atributo da classe mudou para "text-yellow-500"
            cy.get('svg') // Selecione o elemento correto
            .should('have.class', 'text-yellow-500')
    
    });

    it('Teste favorito Tables', () => {
        cy.wait(1000);
    
        
        cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Tables')
            .parent('div') // Vai para o pai
            .find('ul')
            .find('li').first()
            .find('a')
            .find('svg')
            .first()
            .invoke('show')
            .should('be.visible')
            .then(($svg) => {
                // Verifica se já está marcada
                if ($svg.hasClass('text-yellow-400')) {
                    // Se já estiver marcada, desmarque
                    cy.wrap($svg).click(); // Desmarcar
                    cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada
    
                    
                    cy.wrap($svg)
                        .invoke('show') // Torna o SVG visível
                        .realHover() // Simula o hover no elemento
                        .should('be.visible') // Verifica que o SVG está visível após o hover
                        .click(); // Marca novamente
                } else
                    // Marque a estrela, caso ainda não esteja marcada
                    cy.wrap($svg).click();
            });
    
    
            //Verifica se ficou como favorito
            cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
            .should('exist')
    
            //Testa filtro de favoritos
            cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Tables')
            .parent('div')
            .find('.group.flex.h-fit.w-fit.cursor-pointer.flex-row.items-center.gap-2.rounded-2xl.border.border-gray-300.bg-gray-300.p-2.transition-all.dark\\:border-dark-700.dark\\:bg-dark-700.lg\\:flex-col.hover\\:gap-2.lg\\:gap-0')
            .find('ul')
            .should('be.visible')
            .click()
    
            // Verifica se o atributo da classe mudou para "text-yellow-500"
            cy.get('svg') // Selecione o elemento correto
            .should('have.class', 'text-yellow-500')
    
    });
    
});

describe('Teste editor', () => {

    it('Teste editor Enrollments', () => {
        cy.wait(1000);
    
            cy.get('.flex.flex-col.gap-16')
                .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                .contains('Enrollments')
                .parent('div')
                .find('li').first()
                .find('div').first()
                .find('svg')
                .invoke('show')
                .should('be.visible')
                .click({force: true})

            //Verifica se o editor aparece e testa troca de cor e ícones

            cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                .should('be.visible')

                //Verifica troca de cor editor

                .find('div.rounded-b-md.bg-white.p-2.dark\\:bg-dark-500')  
                .find('ul').first()
                .find('li')   
                .then(($liItems) => {

                    // Obter o valor do input (cor) do primeiro item antes de clicar
                    const initialColorValue = $liItems.first().find('input').val();

                    // Obtenha o número total de itens (cores) na lista
                    const totalItems = $liItems.length;
              
                    // Gere um número aleatório entre 0 e totalItems-1
                    const randomIndex = Math.floor(Math.random() * totalItems);
              
                    // Selecione o item de cor aleatória e clique
                    cy.wrap($liItems[randomIndex]).click();
                    
                    // Aguarde a alteração no DOM (cor foi trocada)
                    cy.wrap($liItems.eq(randomIndex))
                    .find('input')  // Seleciona o input dentro do item li
                    .invoke('val')
                    .and('not.eq', initialColorValue); // Garante que o valor foi alterado

              
                  });

                cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                .should('be.visible')

                //Verifica troca de ícone do editor

                .find('div.rounded-b-md.bg-white.p-2.dark\\:bg-dark-500')
                .find('ul').last()
                .find('li')
                .then(($liItems) => {

                    // Obter o valor do input (ícones) do primeiro item antes de clicar
                    const initialIconPath = $liItems.first().find('svg path').attr('d');

                    // Obtenha o número total de itens (ícones) na lista
                    const totalItems = $liItems.length;
              
                    // Gere um número aleatório entre 0 e totalItems-1
                    const randomIndex = Math.floor(Math.random() * totalItems);
              
                    // Selecione o item de ícone aleatória e clique
                    cy.wrap($liItems[randomIndex]).click();
                    
                    // Aguarde a alteração no DOM (ícone foi trocada)
                    cy.wrap($liItems.eq(randomIndex))
                    .find('svg path')  // Seleciona o path dentro do svg
                    .invoke('attr', 'd')
                    .and('not.eq', initialIconPath); // Garante que o valor foi alterado

                  });

                  //Fecha o editor para finalizar o teste

                  cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                    .should('be.visible')
                    .find('div').first()
                    .find('svg')
                    .find('path').click()

    });

    it('Teste editor Kanban', () => {
            cy.wait(1000);
        
                cy.get('.flex.flex-col.gap-16')
                    .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                    .contains('Kanban')
                    .parent('div')
                    .find('li').first()
                    .find('div').first()
                    .find('svg')
                    .invoke('show')
                    .should('be.visible')
                    .click({force: true})
    
                //Verifica se o editor aparece e testa troca de cor e ícones
    
                cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                    .should('be.visible')
    
                    //Verifica troca de cor editor
    
                    .find('div.rounded-b-md.bg-white.p-2.dark\\:bg-dark-500')  
                    .find('ul').first()
                    .find('li')   
                    .then(($liItems) => {
    
                        // Obter o valor do input (cor) do primeiro item antes de clicar
                        const initialColorValue = $liItems.first().find('input').val();
    
                        // Obtenha o número total de itens (cores) na lista
                        const totalItems = $liItems.length;
                  
                        // Gere um número aleatório entre 0 e totalItems-1
                        const randomIndex = Math.floor(Math.random() * totalItems);
                  
                        // Selecione o item de cor aleatória e clique
                        cy.wrap($liItems[randomIndex]).click();
                        
                        // Aguarde a alteração no DOM (cor foi trocada)
                        cy.wrap($liItems.eq(randomIndex))
                        .find('input')  // Seleciona o input dentro do item li
                        .invoke('val')
                        .and('not.eq', initialColorValue); // Garante que o valor foi alterado
    
                  
                      });
    
                    cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                    .should('be.visible')
    
                    //Verifica troca de ícone do editor
    
                    .find('div.rounded-b-md.bg-white.p-2.dark\\:bg-dark-500')
                    .find('ul').last()
                    .find('li')
                    .then(($liItems) => {
    
                        // Obter o valor do input (ícones) do primeiro item antes de clicar
                        const initialIconPath = $liItems.first().find('svg path').attr('d');
    
                        // Obtenha o número total de itens (ícones) na lista
                        const totalItems = $liItems.length;
                  
                        // Gere um número aleatório entre 0 e totalItems-1
                        const randomIndex = Math.floor(Math.random() * totalItems);
                  
                        // Selecione o item de ícone aleatória e clique
                        cy.wrap($liItems[randomIndex]).click();
                        
                        // Aguarde a alteração no DOM (ícone foi trocada)
                        cy.wrap($liItems.eq(randomIndex))
                        .find('svg path')  // Seleciona o path dentro do svg
                        .invoke('attr', 'd')
                        .and('not.eq', initialIconPath); // Garante que o valor foi alterado
    
                      });
    
                      //Fecha o editor para finalizar o teste
    
                      cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                        .should('be.visible')
                        .find('div').first()
                        .find('svg')
                        .find('path').click()
    
    });

    it('Teste editor Tables', () => {
        cy.wait(1000);
    
            cy.get('.flex.flex-col.gap-16')
                .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                .contains('Tables')
                .parent('div')
                .find('li').first()
                .find('div').first()
                .find('svg')
                .invoke('show')
                .should('be.visible')
                .click({force: true})

            //Verifica se o editor aparece e testa troca de cor e ícones

            cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                .should('be.visible')

                //Verifica troca de cor editor

                .find('div.rounded-b-md.bg-white.p-2.dark\\:bg-dark-500')  
                .find('ul').first()
                .find('li')   
                .then(($liItems) => {

                    // Obter o valor do input (cor) do primeiro item antes de clicar
                    const initialColorValue = $liItems.first().find('input').val();

                    // Obtenha o número total de itens (cores) na lista
                    const totalItems = $liItems.length;
              
                    // Gere um número aleatório entre 0 e totalItems-1
                    const randomIndex = Math.floor(Math.random() * totalItems);
              
                    // Selecione o item de cor aleatória e clique
                    cy.wrap($liItems[randomIndex]).click();
                    
                    // Aguarde a alteração no DOM (cor foi trocada)
                    cy.wrap($liItems.eq(randomIndex))
                    .find('input')  // Seleciona o input dentro do item li
                    .invoke('val')
                    .and('not.eq', initialColorValue); // Garante que o valor foi alterado

              
                  });

                cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                .should('be.visible')

                //Verifica troca de ícone do editor

                .find('div.rounded-b-md.bg-white.p-2.dark\\:bg-dark-500')
                .find('ul').last()
                .find('li')
                .then(($liItems) => {

                    // Obter o valor do input (ícones) do primeiro item antes de clicar
                    const initialIconPath = $liItems.first().find('svg path').attr('d');

                    // Obtenha o número total de itens (ícones) na lista
                    const totalItems = $liItems.length;
              
                    // Gere um número aleatório entre 0 e totalItems-1
                    const randomIndex = Math.floor(Math.random() * totalItems);
              
                    // Selecione o item de ícone aleatória e clique
                    cy.wrap($liItems[randomIndex]).click();
                    
                    // Aguarde a alteração no DOM (ícone foi trocada)
                    cy.wrap($liItems.eq(randomIndex))
                    .find('svg path')  // Seleciona o path dentro do svg
                    .invoke('attr', 'd')
                    .and('not.eq', initialIconPath); // Garante que o valor foi alterado

                  });

                  //Fecha o editor para finalizar o teste

                  cy.get('.fixed.z-30.w-72.overflow-hidden.rounded-md.border.border-gray-300.shadow-lg.dark\\:border-dark-700')
                    .should('be.visible')
                    .find('div').first()
                    .find('svg')
                    .find('path').click()

});

    
});

describe('Extras', () => {

    it('Teste expansão (+) linha - Enrollments', () => {
        cy.wait(1000);

        cy.get('.flex.flex-col.gap-16')
        .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
        .contains('Enrollments')
        .closest('div') // Encontra o elemento mais próximo do critério
        .find('li')
        .then(($initialItems) => {
            const initialCount = $initialItems.length;
    
            cy.get('.flex.flex-col.gap-16')
                .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                .contains('Enrollments')
                .closest('div')
                .find('button svg path[d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"]')
                .should('be.visible')
                .closest('button') // Volta para o botão que contém o SVG
                .click({scrollBehavior: false}) //Pra não fazer scroll automático!


            // Valida se o número de <li> aumentou
            cy.get('.flex.flex-col.gap-4.lg\\:flex-row')
                .find('li')
                .should('have.length.greaterThan', initialCount); // Número deve ser maior que o inicial
                
             // Continua clicando até o ícone mudar
             cy.get('.flex.flex-col.gap-16')
             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
             .contains('Enrollments')
             .closest('div')
             .find('button svg path[d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"]')
             .should('be.visible')
             .closest('button')
             .then(($button) => {
                 let previousClass = $button.find('svg path').attr('class'); // Pega a classe do path

                 // Continue clicando até a classe mudar
                 cy.wrap($button).should('have.class', 'cursor-pointer')
                     .then(function clickUntilIconChanges() {
                         cy.wrap($button).click({ scrollBehavior: false });

                         cy.wrap($button).find('svg path').should('not.have.class', previousClass); // Verifica se a classe mudou
                         previousClass = $button.find('svg path').attr('class'); // Atualiza a classe para o próximo clique
            
                });
            });   
        });
    });

    it('Teste espansão total (olho) - Enrollments', () => {
        cy.wait(1000)

                cy.get('.flex.flex-col.gap-16')
                    .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                    .contains('Enrollments')
                    .closest('div')
                    .find('button svg path[d="M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"]')
                    .should('be.visible')
                    .closest('button') // Volta para o botão que contém o SVG
                    .click({scrollBehavior: false}) //Pra não fazer scroll automático!
                    .then(($button) => {
                        const initialClass = $button.find('svg path').attr('class'); // Armazena a classe inicial do ícone
    
                        // Verifica se a classe mudou logo após o clique
                        cy.wrap($button).find('svg path').should('not.have.class', initialClass); // A classe deve mudar

                    //Conta o total de <li> na tela
                    cy.get('.flex.flex-col.gap-16')
                    .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                    .contains('Enrollments')
                    .closest('div') // Encontra o elemento mais próximo do critério
                    .find('li')
                    .then(($initialItems) => {
                        const totalCount = $initialItems.length; // Armazena o número total de <li>


                    cy.get('.flex.flex-col.gap-16')
                    .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
                    .contains('Enrollments')
                    .closest('div')
                    .find('li')
                    .should('have.length', totalCount); // Verifica se o número de <l> é igual ao total contado anteriormente
                    

                    });
                });
       });      
});
