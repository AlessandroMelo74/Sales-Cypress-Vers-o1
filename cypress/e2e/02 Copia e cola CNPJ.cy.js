import { faker } from '@faker-js/faker'

Cypress.on('window:before:load', windows => {

})
describe('Copiar e colar CNPJ´s copiados', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
      })
       
        it('Verifica componentes da tela ICP e utiliza importação tipo copia e cola', function() {
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
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content > small').should('have.text', 'Faça upload de um arquivo CSV').and('be.visible')
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content > small').should('have.text', 'Copie e cole os CNPJs de uma planilha').and('be.visible')
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content > .text').should('have.text', 'Copiar e colar').and('be.visible').click()
        cy.get('mat-label').should('have.text', 'CNPJs').and('be.visible')
        cy.get('#mat-input-2').type('10491294000155{enter}14093050000175{enter}24722051000195{enter}12272408000100{enter}28293066000136{enter}10541293000178{enter}17699214000109{enter}37269489000101{enter}48784547000151{enter}45562867000179{enter}{enter}27224794000123{enter}42900960000158{enter}41975380000167{enter}48713729000131{enter}41915396000184{enter}41664645000106{enter}20307747000102{enter}44487985000105{enter}31174008000106{enter}3874311000178{enter}49609412000112{enter}24950769000139{enter}32086070000109{enter}20175138000139{enter}30076654000160{enter}00394601000126')
        cy.get('.mat-flat-button > .mat-button-wrapper').click()    
        cy.get('h3').should('have.text', 'Nomear projeto').and('be.visible')
        cy.get('p').should('have.text', 'Organize facilmente seus dados usando palavras ou frases simples que façam mais sentido para você.').and('be.visible')
        cy.Nomeprojeto01(project)                
      })
    })
  