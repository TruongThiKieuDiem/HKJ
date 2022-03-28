describe('Account Administrator Management', () => {
    before(() => {
        cy.visit('http://115.79.60.98:3000/login')
        cy.get(':nth-child(2) > .undefined').type('superadmin3');
        cy.get(':nth-child(3) > .undefined').type('Abc123!@#');
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
    it('validate format email invalid', function(){
        cy.get(':nth-child(3) > .undefined').type('kieudiemttkd1006.gmail.com{enter}');
    })
    it ('Hightlight Error', () => {
    const message = cy.get(':nth-child(3) > .text-red-600')
    const invalidText = '*Yêu cầu định dạng Email'

    message.should('have.text', invalidText)
    });
})