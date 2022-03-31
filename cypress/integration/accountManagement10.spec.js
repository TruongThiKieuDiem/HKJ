describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate username with 4 characters', function(){
        cy.get(':nth-child(1) > .undefined').type('kieudiem05');
        cy.get('.grid > :nth-child(2) > .undefined').type('truongthi');
        cy.get(':nth-child(3) > .undefined').type('kieudiemttkd05@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('user');
        cy.get('.rounded-tl-none').type('0987543205');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('123456');
    })
    it ('Hightlight Error', () => {
    const message = cy.get(':nth-child(4) > .text-red-600')
    const invalidText = '*Username không hợp lệ!'

    message.should('have.text', invalidText)
    });
})