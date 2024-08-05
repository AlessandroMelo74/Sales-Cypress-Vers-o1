describe('Pagina de logon SALES efetua login e logof', function() {
       
      it('Verifica Tela de logon SALES - efetua login e logof', function() {
        cy.viewport(1920, 1080);
        cy.visit('/');        
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
          cy.wait(1500)
          cy.get('h2').should('include.text', ' Projetos enviados anteriormente ');
          cy.get('#mat-input-2').should('be.visible')
          cy.get('.toolbar__left > .mat-icon').should('be.visible')
          cy.get('img').should('be.visible')    
          cy.get(':nth-child(3) > .mat-selection-list > .mat-list-item > .mat-list-item-content').should('have.text', ' Análises ').and('be.visible')
          cy.get(':nth-child(4) > .mat-selection-list > .mat-list-item > .mat-list-item-content > .mat-list-text > span').should('have.text', ' Bases geradas ').and('be.visible')
          cy.get('.new').should('have.text', 'addNovo Projeto').and('be.visible')
          cy.get('.toolbar__right > .mat-icon-button').should('be.visible')
          cy.get('.toolbar__right > .mat-icon-button').should('be.visible')

        cy.Sair()   

      
        })
      })
        
