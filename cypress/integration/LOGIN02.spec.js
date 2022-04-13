describe('Test Font Family - Font Size', () => {
    it('Navigate to Login page', () =>{
        cy.visit('http://115.79.60.98:3000/login')
    })
    it('Check font-family of Tên đăng nhập textbox', () => {
        // check font-family
        cy.contains('Tên đăng nhập').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Tên đăng nhập textbox', () => {
        // check font-size
        cy.contains('Tên đăng nhập').should('have.css','font-size', '14px')
    });

    it('Check color of Tên đăng nhập textbox', () => {
        cy.contains('Tên đăng nhập').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Mật khẩu textbox', () => {
        // check font-family
        cy.contains('Mật khẩu').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Mật khẩu textbox', () => {
        // check font-size
        cy.contains('Mật khẩu').should('have.css','font-size', '14px')
    });

    it('Check color of Mật khẩu textbox', () => {
        cy.contains('Mật khẩu').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
});