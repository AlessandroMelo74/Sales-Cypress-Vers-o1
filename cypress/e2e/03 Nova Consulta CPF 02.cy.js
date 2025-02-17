import { faker } from '@faker-js/faker'

  describe('Criando nova Consulta por CPF', function() {
    it('Criando nova Consulta por CPF 02', function() {
          cy.login()         
          const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: `project-${faker.random.words(2)}`
          }
          cy.get('.mdc-button__label > span').click()
          cy.get('.mat-mdc-select-placeholder').click()
          cy.get('#mat-option-0').click()
          cy.get('#mat-input-3').click().type('230.652.814-49')
          cy.get('mat-label.ng-tns-c54-7').click().type('987654321')
          cy.get('#mat-mdc-checkbox-1-input').click()
          cy.get('#mat-mdc-checkbox-2-input').click()
          cy.get('#mat-mdc-checkbox-3-input').click()
          cy.get('#mat-mdc-checkbox-4-input').click()
          cy.get('.new-query__footer > .mdc-button > .mdc-button__label > span').click()
          cy.Sair() 
       })
      })