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
    it('check user create account admin success', function(){
        cy.get(':nth-child(1) > .undefined').type('diem_07');
        cy.get(':nth-child(2) > .undefined').type('truong');
        cy.get(':nth-child(3) > .undefined').type('diem_07@gmail.com');
        cy.get(':nth-child(4) > .undefined').type('diemtruong_07');
        cy.get('.rounded-tl-none').type('09836175128');
        cy.get('form > :nth-child(6) > .undefined').type('Test');
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get(':nth-child(9) > .undefined').type('123456');

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

        cy.get(':nth-child(2) > .undefined').type('diemtruong_07');
        cy.get(':nth-child(3) > .undefined').type('123456');
        cy.get('.mt-6 > .w-full').click();
    })
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.'
        alert.should('contain.text', expectedAlert)
    });
})