describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am05').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })// dang nhap vao he thong va di den form Tao moi tai khoan
    it('validate format phone number invalid', function(){
        cy.get(':nth-child(1) > .undefined').type(this.data.firstName); //nhap vao truong Ten
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName); //nhap vao truong Ho
        cy.get(':nth-child(3) > .undefined').type(this.data.email); //nhap vao truong Email
        cy.get(':nth-child(4) > .undefined').type(this.data.userName); //nhap vao truong Username
        cy.get('.rounded-tl-none').type(this.data.phoneNumber); //nhap vao truong So dien thoai
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department); //nhap vao truong Phong ban
        cy.get('#headlessui-switch-29').click();
        cy.get('#headlessui-listbox-button-30 > .block').click(); //Mo dropdown phan quyen
        cy.get('#headlessui-listbox-option-39 > .font-normal').click(); //chon phan quyen
        cy.get('.relative > .undefined').type(this.data.passWord); //nhap vao truong Mat khau

    })
    it ('Hightlight Error', () => {
    const message = cy.get('.text-red-600')
    const invalidText = '*Số điện thoại không hợp lệ!' //ket qua mong doi

    message.should('have.text', invalidText) //so sanh ket qua mong doi va ket qua thuc te
    });
})