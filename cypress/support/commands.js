Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.viewport(1920, 1080);
    cy.visit('/');
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
        cy.get(':nth-child(2) > .status > div > .mat-focus-indicator').should('have.text', ' Processamento ').and('be.visible')         
  })

  Cypress.Commands.add('Nomeprojeto02', project => {      
      cy.get('#mat-input-7').should('be.visible').type(project.description)
      cy.get('.new-query__footer > .mat-focus-indicator').click()  
      cy.get(':nth-child(2) > .status > div > .mat-focus-indicator').should('have.text', ' Processamento ').and('be.visible')
    })
  

  Cypress.Commands.add('Nomeprojeto03', project => {      
    cy.get('#mat-input-3').should('be.visible').type(project.description)
    cy.get('.new-query__footer > .mat-focus-indicator').click()  
    cy.get(':nth-child(2) > .status > div > .mat-focus-indicator').should('have.text', ' Processamento ').and('be.visible')

  })


