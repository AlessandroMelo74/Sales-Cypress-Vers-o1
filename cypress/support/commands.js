Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.viewport(1920, 1080);
    cy.visit('https://lead-hunter-sales-frontend-dev.azurewebsites.net/auth')
    cy.get('#mat-input-0').type(user)
    cy.get('#mat-input-1').type(password, { log: false })
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
    cy.get('.mat-raised-button').click()
  }
  login()
})


Cypress.Commands.add('Sair', (
  ) => {
    cy.get('.toolbar__user-icon').click()
    cy.get('.toolbar__settings-item > span').click()
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