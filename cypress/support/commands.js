Cypress.Commands.add("LOGIN", () => {
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

        // cy.get('.cursor-pointer > .text-base').click()
        cy.get('[href="/administrators"] > .h-10').click()
        
        cy.wait(3000)

        cy.get('.w-12').click()
})
