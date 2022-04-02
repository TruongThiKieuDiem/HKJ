describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('check user create account admin success', function(){
        cy.get(':nth-child(1) > .undefined').type('kieudiem_011');
        cy.get(':nth-child(2) > .undefined').eq(0).type('truongthi');
        cy.get(':nth-child(3) > .undefined').type('kieudiemtruongthi011@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('kieudiemtt_011');
        cy.get('.rounded-tl-none').type('7418529678');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('123456');

        cy.get('.px-8').click();
    })
    it ('Success Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tạo thành công!'
        alert.should('contain.text', expectedAlert)
    });
    it('user can log in with account', function(){
        cy.get('#headlessui-menu-button-4').click();
        cy.wait(1000)
        cy.contains('Logout').click();
        cy.wait(3000)

        cy.get('form > :nth-child(2) > .undefined').eq(0).type('kieudiemtt_011');
        cy.get('.relative > .undefined').type('123456');
        cy.get('.mt-6 > .w-full').click();
        cy.contains('Tổng quát').should('be.visible');
    })
})