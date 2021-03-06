describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am11').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate username is existing', function(){
        cy.get(':nth-child(1) > .undefined').type(this.data.firstName);
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName);
        cy.get(':nth-child(3) > .undefined').type(this.data.email);
        cy.get(':nth-child(4) > .undefined').type(this.data.userName);
        cy.get('.rounded-tl-none').type(this.data.phoneNumber);
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department);
        cy.get('#headlessui-listbox-button-30 > .block').click();
        cy.get('#headlessui-listbox-option-37 > .font-normal').click();
        cy.get('.relative > .undefined').type(this.data.passWord);

        cy.get('.px-8').click();
    })
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tạo mới tài khoản thất bại'
        alert.should('contain.text', expectedAlert)
    });
})