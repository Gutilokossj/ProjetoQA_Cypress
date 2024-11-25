Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')
});

// describe('Teste favorito', () => {

//     it('Teste favorito Enrollments', () => {
//         cy.wait(1000);
    
//         cy.get('.flex.flex-col.gap-16')
//             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
//             .contains('Enrollments')
//             .parent('div') // Vai para o pai
//             .find('ul')
//             .find('li').first()
//             .find('a')
//             .find('svg')
//             .first()
//             .invoke('show')
//             .should('be.visible')
//             .then(($svg) => {
//                 // Verifica se já está marcada
//                 if ($svg.hasClass('text-yellow-400')) {
//                     // Se já estiver marcada, desmarque
//                     cy.wrap($svg).click(); // Desmarcar
//                     cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada
    
                    
//                     cy.wrap($svg)
//                         .invoke('show') // Torna o SVG visível
//                         .realHover() // Simula o hover no elemento
//                         .should('be.visible') // Verifica que o SVG está visível após o hover
//                         .click(); // Marca novamente
//                 } else
//                     // Marque a estrela, caso ainda não esteja marcada
//                     cy.wrap($svg).click();
//             });
    
    
//             //Verifica se ficou como favorito
//             cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
//             .should('exist')
    
//             //Testa filtro de favoritos
//             cy.get('.flex.flex-col.gap-16')
//             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
//             .contains('Enrollments')
//             .parent('div')
//             .find('.group.flex.h-fit.w-fit.cursor-pointer.flex-row.items-center.gap-2.rounded-2xl.border.border-gray-300.bg-gray-300.p-2.transition-all.dark\\:border-dark-700.dark\\:bg-dark-700.lg\\:flex-col.hover\\:gap-2.lg\\:gap-0')
//             .find('ul')
//             .should('be.visible')
//             .click()
    
//             // Verifica se o atributo da classe mudou para "text-yellow-500"
//             cy.get('svg') // Selecione o elemento correto
//             .should('have.class', 'text-yellow-500')
    
//     });

//     it('Teste favorito Kanban', () => {
//         cy.wait(1000);
    
        
//         cy.get('.flex.flex-col.gap-16')
//             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
//             .contains('Kanban')
//             .parent('div') // Vai para o pai
//             .find('ul')
//             .find('li').first()
//             .find('a')
//             .find('svg')
//             .first()
//             .invoke('show')
//             .should('be.visible')
//             .then(($svg) => {
//                 // Verifica se já está marcada
//                 if ($svg.hasClass('text-yellow-400')) {
//                     // Se já estiver marcada, desmarque
//                     cy.wrap($svg).click(); // Desmarcar
//                     cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada
    
                    
//                     cy.wrap($svg)
//                         .invoke('show') // Torna o SVG visível
//                         .realHover() // Simula o hover no elemento
//                         .should('be.visible') // Verifica que o SVG está visível após o hover
//                         .click(); // Marca novamente
//                 } else
//                     // Marque a estrela, caso ainda não esteja marcada
//                     cy.wrap($svg).click();
//             });
    
    
//             //Verifica se ficou como favorito
//             cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
//             .should('exist')
    
//             //Testa filtro de favoritos
//             cy.get('.flex.flex-col.gap-16')
//             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
//             .contains('Kanban')
//             .parent('div')
//             .find('.group.flex.h-fit.w-fit.cursor-pointer.flex-row.items-center.gap-2.rounded-2xl.border.border-gray-300.bg-gray-300.p-2.transition-all.dark\\:border-dark-700.dark\\:bg-dark-700.lg\\:flex-col.hover\\:gap-2.lg\\:gap-0')
//             .find('ul')
//             .should('be.visible')
//             .click()
    
//             // Verifica se o atributo da classe mudou para "text-yellow-500"
//             cy.get('svg') // Selecione o elemento correto
//             .should('have.class', 'text-yellow-500')
    
//     });

//     it('Teste favorito Tables', () => {
//         cy.wait(1000);
    
        
//         cy.get('.flex.flex-col.gap-16')
//             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
//             .contains('Tables')
//             .parent('div') // Vai para o pai
//             .find('ul')
//             .find('li').first()
//             .find('a')
//             .find('svg')
//             .first()
//             .invoke('show')
//             .should('be.visible')
//             .then(($svg) => {
//                 // Verifica se já está marcada
//                 if ($svg.hasClass('text-yellow-400')) {
//                     // Se já estiver marcada, desmarque
//                     cy.wrap($svg).click(); // Desmarcar
//                     cy.wrap($svg).should('not.have.class', 'text-yellow-400'); // Verifica que a estrela foi desmarcada
    
                    
//                     cy.wrap($svg)
//                         .invoke('show') // Torna o SVG visível
//                         .realHover() // Simula o hover no elemento
//                         .should('be.visible') // Verifica que o SVG está visível após o hover
//                         .click(); // Marca novamente
//                 } else
//                     // Marque a estrela, caso ainda não esteja marcada
//                     cy.wrap($svg).click();
//             });
    
    
//             //Verifica se ficou como favorito
//             cy.get('svg.text-yellow-400.absolute.right-3.top-3.z-10.text-white.group-hover\\:block.hover\\:text-yellow-400')
//             .should('exist')
    
//             //Testa filtro de favoritos
//             cy.get('.flex.flex-col.gap-16')
//             .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
//             .contains('Tables')
//             .parent('div')
//             .find('.group.flex.h-fit.w-fit.cursor-pointer.flex-row.items-center.gap-2.rounded-2xl.border.border-gray-300.bg-gray-300.p-2.transition-all.dark\\:border-dark-700.dark\\:bg-dark-700.lg\\:flex-col.hover\\:gap-2.lg\\:gap-0')
//             .find('ul')
//             .should('be.visible')
//             .click()
    
//             // Verifica se o atributo da classe mudou para "text-yellow-500"
//             cy.get('svg') // Selecione o elemento correto
//             .should('have.class', 'text-yellow-500')
    
//     });
    
// });

describe('Teste editor', () => {

    it('Teste editor Enrollments', () => {
        cy.wait(1000);
    
        cy.get('.flex.flex-col.gap-16')
            .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
            .contains('Enrollments')
            .parent('div')
            .find('li').first()
            .find('div').first()
            .find('svg.cursor-pointer.text-blue-500').should('be.visible').click({force: true})

    });
    
});





