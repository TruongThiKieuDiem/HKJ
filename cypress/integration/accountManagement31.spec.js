describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('check user create account admin success', function(){
        cy.get(':nth-child(1) > .undefined').type('kieudiem_08');
        cy.get(':nth-child(2) > .undefined').eq(0).type('truongthi');
        cy.get(':nth-child(3) > .undefined').type('kieudiemtruongthi08@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('kieudiemtt_08');
        cy.get('.rounded-tl-none').type('09836175100');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
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

        cy.get('form > :nth-child(2) > .undefined').eq(0).type('diemtruong_07');
        cy.get('.relative > .undefined').type('123456');
        cy.get('.mt-6 > .w-full').click();
    })
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.'
        alert.should('contain.text', expectedAlert)
    });
})