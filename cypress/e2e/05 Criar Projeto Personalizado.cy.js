Cypress.on('window:before:load', windows => {

})
describe('Upload de CPNPJ', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://lead-hunter-sales-frontend-dev.azurewebsites.net')
        })
       
      it('Criar Projeto Personalizado', function() {
        cy.login()
        cy.get(':nth-child(1) > .mat-selection-list > .mat-list-item > .mat-list-item-content > .mat-list-text > .single > .content > .open').click()
        cy.get('.xng-breadcrumb-trail').should('have.text', 'Mercado').and('be.visible')
        cy.get('h1').should('have.text', 'Análise geral do Mercado').and('be.visible')
        cy.get('.create-project').should('have.text', 'CRIAR PROJETO PERSONALIZADO').and('be.visible')
        cy.get('p').should('have.text', 'Total de 22.000 empresas ativas em nossa base.').and('be.visible')
        cy.get('.first > .mat-card > .title').should('have.text', 'Faturamento').and('be.visible')
        cy.get('.first > .mat-card').should('be.visible')
        cy.get('.create-project').click()
        //parar aqui pq a tela não esta pronta...
    })
})