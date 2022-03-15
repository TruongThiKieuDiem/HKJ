describe('LOGIN', ()=> {
    it('Check if username invalid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get(':nth-child(2) > .undefined').type('superadmi33'); //nhap vao textbox username: superadmi33
        cy.get(':nth-child(3) > .undefined').type('123456'); //nhap vao textbox password: 123456

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.'
        alert.should('contain.text', expectedAlert)
    });
});
})