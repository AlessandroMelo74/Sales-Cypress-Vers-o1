import { faker } from '@faker-js/faker'

  describe('Criando nova Consulta por Veiculo', function() {
    it('Criando nova Consulta por Veiculo 01', function() {
          cy.login()         
          const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: `project-${faker.random.words(2)}`
          }
          cy.get('.mdc-button__label > span').click()
          cy.get('.mat-mdc-select-placeholder').click()          
          cy.get('#mat-option-2').click()
          cy.get('.mat-mdc-select-placeholder').click()
          cy.get('#mat-option-3').click()
          cy.get('mat-label.ng-tns-c54-8').click().type('CRM2950')
          cy.get('mat-label.ng-tns-c54-9').click().type('placa')
          cy.get('.new-query__footer > .mdc-button > .mdc-button__label > span').click()
          cy.Sair()          
          })
      })