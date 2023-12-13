describe('Efetua Login logof', () => {
    it('successfully', () => {
      cy.login()
  
      cy.get('.mat-menu-trigger').should('be.visible')
    
    })
  })