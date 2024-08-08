import { faker } from '@faker-js/faker'
Cypress.on('window:before:load', () => {
})
describe('Criar Projeto Personalizado', function() {
      beforeEach(function() {
        })
       it('Valida tela de bases geradas', function() {
        cy.login()
        cy.get(':nth-child(4) > .mat-selection-list > .mat-list-item > .mat-list-item-content').click()
        cy.get(':nth-child(4) > .mat-selection-list > .mat-list-item > .mat-list-item-content > .mat-list-text > span').should('contain', 'Bases geradas');
        cy.get('tr > :nth-child(1)').should('have.text', ' ARQUIVO ').and('be.visible')
        cy.get('tr > :nth-child(2)').should('have.text', ' ORIGEM ').and('be.visible')
        cy.get('tr > :nth-child(3)').should('have.text', 'ID').and('be.visible')
        cy.get('tr > :nth-child(4)').should('have.text', ' LEADS GERADOS ').and('be.visible')
        cy.get('tr > :nth-child(5)').should('have.text', ' DATA ').and('be.visible')
        cy.get('tr > :nth-child(6)').should('have.text', ' STATUS ').and('be.visible')
        cy.get('tr > .actions').should('have.text', ' AÇÕES ').and('be.visible')
        cy.get(':nth-child(2) > .actions > div > .mat-focus-indicator').click()
        cy.get('.full-button').click()
        
        cy.Sair()
        

    })
  })
  
