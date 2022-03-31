describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate username is existing', function(){
        cy.get(':nth-child(1) > .undefined').type('kieudiem05');
        cy.get('.grid > :nth-child(2) > .undefined').type('truongthi');
        cy.get(':nth-child(3) > .undefined').type('kieudiemttkd05@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('kieudiem02');
        cy.get('.rounded-tl-none').type('0987543205');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type('123456');

        cy.get('.px-8').click();
    })
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tạo mới tài khoản thất bại'
        alert.should('contain.text', expectedAlert)
    });
})