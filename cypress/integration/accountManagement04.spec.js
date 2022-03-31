describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate email already exists', function(){
        cy.get(':nth-child(1) > .undefined').type('test');
        cy.get(':nth-child(2) > .undefined').eq(0).type('2');
        cy.get(':nth-child(3) > .undefined').type('truongdiem1006@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('test1');
        cy.get('.rounded-tl-none').type('023447672');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('123456');

        cy.get('.px-8').click();
    })
    it ('Success Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tạo mới tài khoản thất bại!'
        alert.should('contain.text', expectedAlert)
    });
})