import { faker } from '@faker-js/faker'


      it('Verifica componentes da tela ICP e faz Upload de Arquivo CSV', function() {
        cy.login()
        const project = {
          name: `project-${faker.datatype.uuid()}`,
          description: `project-${faker.random.words(2)}`
        }
        cy.title().should('be.equal', 'Sales')
        cy.get('img').should('be.visible')
        cy.get('.new').click()
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('lead-ui-upload > :nth-child(1) > .upload').selectFile('cypress/100_reg.csv', { action: 'drag-drop' })         
        cy.get('.name > h5').should('have.text', 'Nomear Projeto').and('be.visible')
        cy.Nomeprojeto03(project)      
        
        
        })

  