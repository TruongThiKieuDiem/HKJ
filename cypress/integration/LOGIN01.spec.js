describe('Test Font Family - Font Size', () => {
    it('Navigate to Login page', () =>{
        cy.visit('http://115.79.60.98:3000/login')
    })
    it('Check font-family of Đăng nhập vào tài khoản title', () => {
        // check font-family
        cy.contains('Đăng nhập vào tài khoản').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Tong quat title', () => {
        // check font-size
        cy.contains('Đăng nhập vào tài khoản').should('have.css','font-size', '28px')
    });

    it('Check color of title', () => {
        cy.contains('Đăng nhập vào tài khoản').should('have.css', 'color', 'rgb(63, 67, 74)')
    });
});