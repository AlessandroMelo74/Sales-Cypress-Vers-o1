import { faker } from '@faker-js/faker'

  describe('Novo Projet', function() {
    it('Cria novo Projeto Personalizado', function() {
          cy.login()         
          const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: `project-${faker.random.words(2)}`
          }
          cy.get('.mat-button-wrapper > span').click()
          cy.get('#mat-radio-2 > .mat-radio-label').click()
          cy.get('.header > p').should('have.text', 'Filtre a sua base:').and('be.visible')
          cy.get('#mat-select-value-5 > .mat-select-placeholder').click()
          
        //cy.get('#mat-select-value-5 > span').click()
        cy.get('#mat-option-50 > .mat-pseudo-checkbox').click()
        //cy.get('#mat-option-49 > .mat-option-text').click()                        
        /*cy.get('#mat-select-value-1 > span').click()
        cy.get('#mat-option-1 > span').click()
        cy.get('#mat-select-value-3 > span').click()
        cy.get('#mat-option-13 > span').click()
        cy.get('#mat-input-2').type("1")
        cy.get('#mat-input-3').type("99900000")
        cy.get('#mat-input-4').type("1")
        cy.get('#mat-input-5').type("30")
        cy.Nomeprojeto03(project)
          */
          
        })
      })
  