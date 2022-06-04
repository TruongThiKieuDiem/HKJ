describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am04').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    }) //dang nhap vao he thong va di toi form Tao moi tai khoan
    it('validate email already exists', function(){
        cy.get(':nth-child(1) > .undefined').type(this.data.firstName); //nhap vao truong Ho
        cy.get('.grid > :nth-child(2) > .undefined').type(this.data.lastName); //nhap vao truong Ten
        cy.get(':nth-child(3) > .undefined').type(this.data.email); //nhap vao truong Email
        cy.get(':nth-child(4) > .undefined').type(this.data.userName); //nhap vao truong Username
        cy.get('.rounded-tl-none').type(this.data.phoneNumber); //Nhap vao truong So dien thoai
        cy.get('form > :nth-child(6) > .undefined').type(this.data.department); //Nhap vao truong Phong ban
        cy.get('#headlessui-switch-29').click();
        cy.get('#headlessui-listbox-button-30 > .block').click(); //Mo dropdown phan quyen
        cy.get('#headlessui-listbox-option-39 > .font-normal').click(); //chon phan quyen
        cy.get('.relative > .undefined').type(this.data.passWord); //nhap vao truong Mat khau

        cy.get('.px-8').click(); //nhan vao nut Them
    })
    it ('Success Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tạo mới tài khoản thất bại!' //ket qua mong doi
        alert.should('contain.text', expectedAlert) //so sanh ket qua mong doi va ket qua thuc te
    });
})