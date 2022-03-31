describe ('LOGIN', () => {
    it('Check if username valid and password invalid', function(){
            cy.visit('http://115.79.60.98:3000/login')
            cy.get('form > :nth-child(2) > .undefined').eq(0).type('superadmin2'); 
            cy.get('.relative > .undefined').type('123456'); 
    
            cy.get('.mt-6 > .w-full').click();
            cy.wait(6000)

            Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
            cy.contains('Tổng quát').should('be.visible');
        });
    });