describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am14').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate a sequence of spaces and special characters in Mật khẩu field', function(){
        cy.get(':nth-child(1) > .undefined').type(this.data.firstName);
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName);
        cy.get(':nth-child(3) > .undefined').type(this.data.email);
        cy.get(':nth-child(4) > .undefined').type(this.data.userName);
        cy.get('.rounded-tl-none').type(this.data.phoneNumber);
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department);
        cy.get('#headlessui-listbox-button-30 > .block').click();
        cy.get('#headlessui-listbox-option-37 > .font-normal').click();
        cy.get('.relative > .undefined').type(this.data.passWord);
        cy.get('form > :nth-child(9) > .text-gray-light').click();
    })
    it ('Hightlight Error', () => {
        const message = cy.get('.text-red-600')
        const invalidText = '*Mật khẩu không hợp lệ!'

        message.should('have.text', invalidText)
    });
})