Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


  beforeEach(() => {
    cy.visit('http://192.168.14.239:4000/')
});

describe('Testes cabeçalho', () => {

   it('Teste Contact', () => {
            cy.get('div.standardSize.flex.items-center.px-6.py-3')
            .find('li')
            .contains('Contact')
            .click()
            cy.url().should('equal','http://192.168.14.239:4000/contact');
   });

   it('Teste Tasks', () => {
            cy.get('div.standardSize.flex.items-center.px-6.py-3')
            .find('li')
            .contains('Tasks')
            .click()
            cy.url().should('eq','http://192.168.14.239:4000/tasks')
    });

    it('Teste Tema/Botão', () => {
            cy.get('#__next > div > section > nav > div > div > div > div > svg.text-yellow-600.z-10.cursor-pointer')
            .click()

             //Valide a alteração da classe após o clique
            cy.get('svg.text-yellow-700') // Agora espera-se a classe "text-yellow-700"
            .should('exist'); // Verifica se a nova classe foi aplicada

            //Voltar ao original
            cy.get('#__next > div > section > nav > div > div > div > div > svg.text-yellow-700.z-10.cursor-pointer')
            .click()

             //Valide a alteração da classe após o clique
             cy.get('svg.text-yellow-600')
             .should('exist');
    });
    
});

describe('Testes corpo', () => {

    it('Enrollments (form)', () => {
        cy.get('.flex.flex-col.gap-16')
        .contains('Enrollments')
        .parent('div')
        .find('ul')
        .find('li').first()
        .then(($li) => {
            
            cy.wrap($li).click(); // Exemplo de clicar no primeiro li, se necessário
            cy.url().should('include', 'http://192.168.14.239:4000/forms');
        });
    });

    it('Kanban', () => {
        cy.get('.flex.flex-col.gap-16')
        .contains('Kanban')
        .parent('div')
        .find('ul')
        .find('li').first()
        .then(($li) => {
            
            cy.wrap($li).click(); // Exemplo de clicar no primeiro li, se necessário
            cy.url().should('include', 'http://192.168.14.239:4000/kanban');
        });
    });

    it('Tables', () => {
        cy.get('.flex.flex-col.gap-16')
        .contains('Tables')
        .parent('div')
        .find('ul')
        .find('li').first()
        .then(($li) => {
            
            cy.wrap($li).click(); // Exemplo de clicar no primeiro li, se necessário
            cy.url().should('include', 'http://192.168.14.239:4000/tables');
        });
    });
});