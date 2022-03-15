describe ('LOGIN', () => {
it('Check if username valid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get(':nth-child(2) > .undefined').type('superadmin3'); //nhap vao textbox username: superadmin3
        cy.get(':nth-child(3) > .undefined').type('123456'); //nhap vao textbox password: 123456

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.'
        alert.should('contain.text', expectedAlert)
    });
});