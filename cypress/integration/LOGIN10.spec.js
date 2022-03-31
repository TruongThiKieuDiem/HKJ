describe('LOGIN', () => {
    it('Check if username valid and password invalid: 5 characters', function(){
    cy.visit('http://115.79.60.98:3000/login');

    cy.get('form > :nth-child(2) > .undefined').eq(0).type('superadmin2'); 
    cy.get('.relative > .undefined').type('abc12'); 
    cy.get('.mt-6 > .w-full').click();

    const message = cy.get('.text-red-600')
    const invalidText = '*Mật khẩu phải ít nhất 6 kí tự'

    message.should('have.text', invalidText)
})
})