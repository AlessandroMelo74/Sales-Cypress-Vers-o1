import { faker } from '@faker-js/faker'


Cypress.on('window:before:load', () => {

})
describe('Criar Projeto Personalizado', function() {
      beforeEach(function() {
        })
      it('Verifica componentes da tela e criar projeto personalizado', function() {
        cy.login()
        
        const project = {
          name: `project-${faker.datatype.uuid()}`,
          description: `project-${faker.random.words(3)}`
        }
        cy.get(':nth-child(1) > .mat-selection-list > .mat-list-item > .mat-list-item-content').click()
        cy.get('.xng-breadcrumb-trail').should('have.text', 'Mercado').and('be.visible')
        cy.get('h1').should('have.text', 'Análise geral do Mercado').and('be.visible')
        cy.get('.create-project').should('have.text', 'CRIAR PROJETO PERSONALIZADO').and('be.visible')
        cy.get('p').should('have.text', 'Total de 19.554.031 empresas ativas em nossa base.').and('be.visible')
        cy.get(':nth-child(1) > .chart-content > .mat-card > .header > .label > .title').should('have.text', 'Faturamento').and('be.visible')
        cy.get('.first > .mat-card').should('be.visible')
        cy.get('.create-project').click()
        cy.get('#mat-select-value-5 > span').click()
        cy.get('#mat-option-37').click().tab()                        
        cy.get('#mat-select-value-1 > span').click()
        cy.get('#mat-option-1 > span').click()
        cy.get('#mat-select-value-3 > span').click()
        cy.get('#mat-option-13 > span').click()
        cy.get('#mat-input-2').type("1")
        cy.get('#mat-input-3').type("99900000")
        cy.get('#mat-input-4').type("1")
        cy.get('#mat-input-5').type("30")
        cy.Nomeprojeto03(project)
              
        

        })
})