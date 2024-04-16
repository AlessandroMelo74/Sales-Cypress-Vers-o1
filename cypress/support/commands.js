Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.visit('https://lead-hunter-sales-frontend-dev.azurewebsites.net')

    cy.get('#mat-input-0').type(user)
    cy.get('#mat-input-1').type(password, { log: false })
    cy.get('.mat-raised-button').click()
  }
  login()
})


Cypress.Commands.add('Sair', (
  ) => {
  cy.get('.mat-menu-trigger').click()
  cy.get('.mat-list-item-content > .mat-focus-indicator').click()
  })

  Cypress.Commands.add('Nomeprojeto01', project => {
        cy.get('#mat-input-3').should('be.visible').type(project.description)
        cy.get('form.ng-valid > .mat-focus-indicator').click()              
  })

  Cypress.Commands.add('Nomeprojeto02', project => {      
    cy.get('.mat-form-field-infix').should('be.visible').type(project.description)
    cy.get('form.ng-valid > .mat-focus-indicator > .mat-button-wrapper').click()  
})

Cypress.Commands.add('Nomeprojeto03', project => {      
  cy.get('#mat-input-6').should('be.visible').type(project.description)
  cy.get('#mat-dialog-0 > lead-ui-custom-project > div > mat-dialog-actions > button > span.mat-button-wrapper').click()  
})