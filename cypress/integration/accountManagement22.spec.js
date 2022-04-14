describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am22').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate field Ho are empty', function(){
        cy.get(':nth-child(1) > .undefined').type('{alt}');
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName);
        cy.get(':nth-child(3) > .undefined').type(this.data.email);
        cy.get(':nth-child(4) > .undefined').type(this.data.userName);
        cy.get('.rounded-tl-none').type(this.data.phoneNumber);
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department);
        cy.get('#headlessui-switch-28').click();
        cy.get('#headlessui-listbox-button-29 > .block').click();
        cy.get('#headlessui-listbox-option-35 > .font-normal').click();
        cy.get('.relative > .undefined').type(this.data.passWord);
    })
    it ('Hightlight Error', () => {
    const message = cy.get(':nth-child(1) > .text-red-600')
    const invalidText = '*Yêu cầu Họ'
    message.should('have.text', invalidText)
    });
})