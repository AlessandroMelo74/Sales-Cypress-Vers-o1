import { faker } from '@faker-js/faker'

  describe('Novo Projeto Personalizado', function() {
    it('Custom Cnae *0111-3/01 e 0111-3/02', function() {
          cy.login()         
          const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: `project-${faker.random.words(2)}`
          }

          cy.get('.new').should('be.visible').click()
          cy.get('#mat-radio-2 > .mat-radio-label').click()
          cy.get('.header > p').should('have.text', 'Filtre a sua base:').and('be.visible')
          cy.get('#mat-select-value-5 > .mat-select-placeholder').click()
          cy.get('#mat-option-31 > span').click();
          cy.get('#mat-option-33 > span').click();
          cy.get('#mat-option-1389 > span').click();          
          cy.get('#mat-option-33 > span').click().type('{esc}');
          cy.get('#mat-select-value-1 > .mat-select-placeholder').click()
          cy.get('#mat-option-1 > span').click()
          cy.get('#mat-option-2 > span').click()
          cy.get('#mat-option-3 > span').click().type('{esc}');
          cy.get('.mat-select-placeholder').click()
          cy.get('#mat-option-24 > span').click()
          cy.get('#mat-option-15 > span').click()
          cy.get('#mat-option-13 > span').click().type('{esc}');
          cy.get('#mat-input-3').type('1')
          cy.get('#mat-input-4').type('500000')
          cy.get('#mat-input-5').type("1")
          cy.get('#mat-input-6').type("30")
          cy.Nomeprojeto02(project)          
        })
      })
    