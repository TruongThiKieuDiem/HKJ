describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate format email invalid', function(){
        cy.get(':nth-child(1) > .undefined').type('kieudiem01');
        cy.get('.grid > :nth-child(2) > .undefined').type('truongthi');
        cy.get(':nth-child(3) > .undefined').type('kieudiemttkd01.gmail.com');
        cy.get(':nth-child(4) > .undefined').type('kieudiem01');
        cy.get('.rounded-tl-none').type('0987543201');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('.relative > .undefined').type('123456');

    })
    it ('Hightlight Error', () => {

    const message = cy.get(':nth-child(3) > .text-red-600')
    const invalidText = '*Yêu cầu định dạng Email'

    message.should('have.text', invalidText)
    });
})