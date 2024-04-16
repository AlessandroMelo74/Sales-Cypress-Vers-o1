/// <reference types="Cypress" />
Cypress.on('window:before:load', windows => {

})
describe('Pagina de logon SALES efetua login e logof', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
       cy.visit('https://lead-hunter-sales-frontend-dev.azurewebsites.net')
          
      })
       
      it('Verifica Tela de logon SALES - efetua login e logof', function() {
        cy.title().should('be.equal', 'Sales')
        cy.get('.image-logo').should('be.visible')
        cy.get('.image-info').should('be.visible')
        cy.get('.mr-3').should('be.visible')
        cy.get('h1').should('have.text', 'Faça seu login').and('be.visible')
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('be.visible')
        cy.get('.mat-raised-button').should('have.text', ' ACESSAR ').and('be.visible')
        cy.get('.forgot > .mat-button-wrapper').should('have.text', ' Esqueci minha senha ').and('be.visible')
        cy.get('.footer-copyright').should('have.text', '© 2024 Credilink Informações de Crédito. Todos os direitos reservados.') .and('be.visible')
        cy.get('.main > :nth-child(1)').should('have.text', '21 2518-1109').and('be.visible')
        cy.get('.main > :nth-child(2)').should('have.text', 'Rio de Janeiro').and('be.visible')
        cy.get('.others > :nth-child(1)').should('have.text', '11 4637-5855').and('be.visible')
        cy.get('.others > :nth-child(2)').should('have.text', 'São Paulo').and('be.visible')

        cy.login()
        cy.get('.logo').should('be.visible')
        
        cy.Sair()   

        
        })

      })