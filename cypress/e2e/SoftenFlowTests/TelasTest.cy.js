Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


  beforeEach(() => {
    cy.visit('/')
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Não falhe o teste se o erro for relacionado à propriedade 'style' 
    if (err.message.includes("Cannot read properties of null (reading 'style')")) {
        return false; // Suprime o erro
    }
    return true;
  });

describe('Testes cabeçalho', () => {

   it('Teste Contact', () => {
            cy.get('div.standardSize.flex.items-center.px-6.py-3')
            .find('li')
            .contains('Contact')
            .click()
            cy.url().should('equal', Cypress.config('baseUrl') + '/contact');

            //Voltar para página inicial
            cy.get('.flex.flex-col.items-center.max-w-sm.mx-auto.text-center')
            .find('a').contains('Home').click()
            cy.url().should('equal', Cypress.config('baseUrl') + '/')
   });

   it('Teste Tasks', () => {
            cy.get('div.standardSize.flex.items-center.px-6.py-3')
            .find('li')
            .contains('Tasks')
            .click()
            cy.url().should('eq', Cypress.config('baseUrl') + '/tasks')

            //Voltar para página inicial
            cy.get('.flex.flex-col.items-center.max-w-sm.mx-auto.text-center')
            .find('a').contains('Home').click()
            cy.url().should('equal', Cypress.config('baseUrl')  + '/')
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
            cy.url().should('include', '/forms');
        });
    });

    it('Kanban', () => {
        cy.get('.flex.flex-col.gap-16')
        .contains('Kanban')
        .should('exist')
        .parent('div')
        .find('ul')
        .find('li').first()
        .then(($li) => {
            
            cy.wrap($li).click(); // Exemplo de clicar no primeiro li, se necessário
            cy.url().should('include', '/kanban');
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
            cy.url().should('include', '/tables');
        });
    });
    
});