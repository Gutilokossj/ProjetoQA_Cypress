Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1920, 1080)
  });

  describe('Testes de Exclusão', () => {
        
        it('Teste exclusão Enrollments em loop', () => {
            excluirProximoFormulario();
        });

    });

    
  //Funções

  function excluirProximoFormulario() {
    cy.get('.flex.flex-col.gap-16')
        .find('.mb-3.font-inter_semibold.text-gray-500\\/90.dark\\:text-dark-200')
        .contains('Enrollments')
        .parent('div')
        .find('li')
        .first()
        .then(($li) => {
            if ($li.length === 0) {
                cy.log('Nenhum formulário restante.');
                return; // Sai da função se não houver mais formulários
            }

            cy.wrap($li).click(); // Abre o primeiro formulário

            cy.get('.flex.h-full.max-h-full.flex-col.overflow-y-auto')
                .find('ul').eq(1)
                .find('li').eq(3)
                .click();

            cy.get('.select-none.text-gray-800.dark\\:text-gray-400.bg-slate-300.dark\\:bg-dark-700.py-1.px-2.rounded-md.mx-1')
                .invoke('text')
                .then((formName) => {
                    cy.log('Nome do formulário:', formName);

                    cy.get('input[type="text"]').type(formName);

                    cy.get('.flex.justify-end.gap-4')
                        .find('button')
                        .contains('Confirm')
                        .click();

                    cy.wait(1000); // Aguarda um tempo antes de verificar novamente

                    // Chama a função novamente para excluir o próximo formulário
                    excluirProximoFormulario();
                });
        });
}