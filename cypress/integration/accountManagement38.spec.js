describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am38').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('Check the account can log in to the BE when selecting the BE account activation', function(){
        cy.get(':nth-child(1) > .undefined').type(this.data.firstName);
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName);
        cy.get(':nth-child(3) > .undefined').type(this.data.email);
        cy.get(':nth-child(4) > .undefined').type(this.data.userName);
        cy.get('.rounded-tl-none').type(this.data.phoneNumber);
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department);
        cy.get('#headlessui-switch-29').click();
        cy.get('#headlessui-listbox-button-30 > .block').click();
        cy.get('#headlessui-listbox-option-37 > .font-normal').click();
        cy.get('.relative > .undefined').type(this.data.passWord);

        cy.get('.px-8').click();
    })
    it ('Success Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tạo thành công!'
        alert.should('contain.text', expectedAlert)
    });
    it('user can log in with account', function(){
        cy.get('#headlessui-menu-button-4').click();
        cy.wait(1000)
        cy.contains('Logout').click();
        cy.wait(3000)

        cy.get('form > :nth-child(2) > .undefined').eq(0).type(this.data.email);
        cy.get('.relative > .undefined').type(this.data.passWord);
        cy.get('.mt-6 > .w-full').click();
        cy.contains('Tổng quát').should('be.visible');
    })
})