describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am10').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate username with 4 characters', function(){
        cy.get(':nth-child(1) > .undefined').type(this.data.firstName);
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName);
        cy.get(':nth-child(3) > .undefined').type(this.data.email);
        cy.get(':nth-child(4) > .undefined').type(this.data.userName);
        cy.get('.rounded-tl-none').type(this.data.phoneNumber);
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department);
        cy.get('#headlessui-switch-29').click();
        cy.get('#headlessui-listbox-button-30 > .block').click();
        cy.get('#headlessui-listbox-option-39 > .font-normal').click();
        cy.get('.relative > .undefined').type(this.data.passWord);
    })
    it ('Hightlight Error', () => {
    const message = cy.get(':nth-child(4) > .text-red-600')
    const invalidText = '*Username không hợp lệ!'

    message.should('have.text', invalidText)
    });
})