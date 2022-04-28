describe('Test Font Family - Font Size', () => {
    it('Navigate to Login page', () =>{
        cy.visit('http://115.79.60.98:3000/login')
    })
    it('Check font-family of title Đăng nhập button', () => {
        // check font-family
        cy.get('.mt-6 > .w-full').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of title Đăng nhập button', () => {
        // check font-size
        cy.get('.mt-6 > .w-full').should('have.css','font-size', '15px')
    });

    it('Check color of title Đăng nhập textbox', () => {
        cy.get('.mt-6 > .w-full').should('have.css', 'color', 'rgb(255, 255, 255)')
    });
});