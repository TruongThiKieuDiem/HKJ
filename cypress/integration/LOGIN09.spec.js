describe ('LOGIN', () => {
it('Check if username valid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get('form > :nth-child(2) > .undefined').eq(0).type('superadmin2'); 
        cy.get('.relative > .undefined').type('12345611'); 

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.'
        alert.should('contain.text', expectedAlert)
        })
})