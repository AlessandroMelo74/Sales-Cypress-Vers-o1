import { faker } from '@faker-js/faker'

Cypress.on('window:before:load', () => {

})
describe('Upload de CPNPJ', function() {
      beforeEach(function() {
        })
       
      it('Verifica componentes da tela ICP e faz Upload de Arquivo CSV', function() {
        cy.login()
        const project = {
          name: `project-${faker.datatype.uuid()}`,
          description: `project-${faker.random.words(2)}`
        }
        cy.title().should('be.equal', 'Sales')
        cy.get('.logo').should('be.visible')
        cy.get(':nth-child(1) > .mat-selection-list > .mat-list-item > .mat-list-item-content').should('have.text', 'Mercado').and('be.visible')
        cy.get('.xng-breadcrumb-trail').should('have.text', 'Analítico').and('be.visible')
        cy.get(':nth-child(2) > .mat-selection-list > .mat-list-item > .mat-list-item-content > .mat-list-text > .single > .content').should('have.text', '\n  ICP').and('be.visible')
        cy.get('#mat-expansion-panel-header-0').should('have.text', 'Projetos').and('be.visible')
        cy.get('h3').should('have.text', 'Como você gostaria de importar seus dados?').and('be.visible')
        cy.get('lead-analysis.ng-star-inserted > div > :nth-child(2)').should('have.text', 'Escolha uma das opções abaixo').and('be.visible')
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content > .text').should('have.text', 'Upload de Arquivo').and('be.visible')
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content > small').should('have.text', 'Copie e cole os CNPJs de uma planilha').and('be.visible')
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content > small').should('have.text', 'Faça upload de um arquivo CSV').and('be.visible')
        cy.get('#mat-radio-2 > .mat-radio-label').click()
        cy.get(':nth-child(1) > .upload').selectFile('cypress/50_reg.csv', { action: 'drag-drop' })
        cy.get('.mat-flat-button').click()
        cy.get('h3').should('have.text', 'Nomear projeto').and('be.visible')
        cy.get('p').should('have.text', 'Organize facilmente seus dados usando palavras ou frases simples que façam mais sentido para você.').and('be.visible')
        cy.Nomeprojeto02(project)      
        //cy.get(':nth-child(2) > .status > div > .mat-focus-indicator').should('have.text', 'Processamento').and('be.visible')
        })
    })

  