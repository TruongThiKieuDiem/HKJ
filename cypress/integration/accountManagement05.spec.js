describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate format phone number invalid', function(){
        cy.get(':nth-child(1) > .undefined').type('test');
        cy.get(':nth-child(2) > .undefined').eq(0).type('2');
        cy.get(':nth-child(3) > .undefined').type('truongdiem1006@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('test1');
        cy.get('.rounded-tl-none').type('tyuyr098338');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('123456');

    })
    it ('Hightlight Error', () => {
    const message = cy.get('.text-red-600')
    const invalidText = '*Số điện thoại không hợp lệ!'

    message.should('have.text', invalidText)
    });
})