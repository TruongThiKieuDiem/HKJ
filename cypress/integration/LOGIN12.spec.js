describe('LOGIN', ()=> {
    it('Check if username and password empty', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get(':nth-child(2) > .undefined').type('{alt}'); //khong nhap vao textbox username
        cy.get(':nth-child(3) > .undefined').type('{alt}'); //khong nhap vao textbox password

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const message1 = cy.get(':nth-child(2) > .text-red-600')
        const invalidText1 = '*Yêu cầu tên đăng nhập'
        message1.should('have.text', invalidText1)

        const message2 = cy.get(':nth-child(3) > .text-red-600')
        const invalidText2 = '*Yêu cầu mật khẩu'
        message2.should('have.text', invalidText2)
    });
});