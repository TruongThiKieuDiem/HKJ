describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate field password empty', function(){
        cy.get(':nth-child(1) > .undefined').type('diem05');
        cy.get('.grid > :nth-child(2) > .undefined').type('truongthi');
        cy.get(':nth-child(3) > .undefined').type('kieudiemtruongthi05@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('kieudiem05');
        cy.get('.rounded-tl-none').type('0902358987');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('{alt}');
        cy.get('form > :nth-child(9) > .text-gray-light').click();
    })
    it ('Hightlight Error', () => {
    const message = cy.get('.text-red-600')
    const invalidText = '*Yêu cầu mật khẩu'
    message.should('have.text', invalidText)
    });
})