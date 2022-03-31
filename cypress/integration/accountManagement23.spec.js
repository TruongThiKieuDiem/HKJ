describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate Ten is empty', function(){
        cy.get(':nth-child(1) > .undefined').type('diem05');
        cy.get('.grid > :nth-child(2) > .undefined').type('{alt}');
        cy.get(':nth-child(3) > .undefined').type('kieudiemttkd05@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('kieudiem02');
        cy.get('.rounded-tl-none').type('0987543205');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('123456');
    })
    it ('Hightlight Error', () => {
    const message = cy.get('.grid > :nth-child(2) > .text-red-600')
    const invalidText = '*Yêu cầu Tên'
    message.should('have.text', invalidText)
    });
})