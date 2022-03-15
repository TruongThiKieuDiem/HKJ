describe('LOGIN', () => {
    it('Check if username valid and password invalid: 5 characters', function(){
    cy.visit('http://115.79.60.98:3000/login');

    cy.get(':nth-child(2) > .undefined').type('superadmin3');
    cy.get(':nth-child(3) > .undefined').type('Abc12');
    cy.get('.mt-6 > .w-full').click();

    const message = cy.get('.text-red-600')
    const invalidText = '*Mật khẩu phải ít nhất 6 kí tự'

    message.should('have.text', invalidText)
})
})