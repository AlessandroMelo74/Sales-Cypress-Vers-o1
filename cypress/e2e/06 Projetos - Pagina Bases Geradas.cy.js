Cypress.on('window:before:load', windows => {

})
describe('Pagina Bases Geradas', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        })
       
      it('Pagina Base Geradas', function() {
        cy.login()
        cy.get('.mat-expansion-panel-header-title > .open').click()
        cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-list-text > span').click()
        cy.get('h2').should('be.visible')
        cy.get('p').should('have.text', 'Abaixo listamos suas últimas bases de leads geradas' ).and('be.visible')
        cy.get('#mat-input-2').should('be.visible')
        cy.get('.mat-form-field-suffix > .mat-icon').should('be.visible')
        cy.get('tr > :nth-child(1)').should('have.text', ' ARQUIVO ' ).and('be.visible')
        cy.get('tr > :nth-child(2)').should('have.text', ' ORIGEM ' ).and('be.visible')
        cy.get('tr > :nth-child(3)').should('have.text', 'ID' ).and('be.visible')
        cy.get('tr > :nth-child(4)').should('have.text', ' LEADS GERADOS ' ).and('be.visible')
        cy.get('tr > :nth-child(5)').should('have.text', ' DATA ' ).and('be.visible')
       
        cy.get(':nth-child(2) > .file > .text').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .text').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(3) > .text').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(4) > .text').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(5) > .text').should('be.visible')
            
        cy.get(':nth-child(3) > .file > .text').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > .text').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(3) > .text').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(4) > .text').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(5) > .text').should('be.visible')
       
        cy.get(':nth-child(1) > .mat-icon').should('be.visible')
        cy.get('.options > div > span').should('be.visible')
        cy.get(':nth-child(3) > .mat-icon').should('be.visible')
       
        cy.Sair()
        

   })
})
