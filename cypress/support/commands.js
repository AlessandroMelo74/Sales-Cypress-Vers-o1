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