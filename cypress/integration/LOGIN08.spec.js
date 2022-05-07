describe('LOGIN', () => {
    before(function(){
        cy.fixture('data_login08').then(function(data){
          this.data = data
        })
      })
    it('Check if the password with the length of 5 characters', function(){
    cy.visit('http://115.79.60.98:3000/login');

    cy.get('form > :nth-child(2) > .undefined').eq(0).type(this.data.Username); 
    cy.get('.relative > .undefined').type(this.data.Password); 
    cy.get('.mt-6 > .w-full').click();

    const message = cy.get('.text-red-600')
    const invalidText = '*Mật khẩu phải ít nhất 6 kí tự'

    message.should('have.text', invalidText)
})
})