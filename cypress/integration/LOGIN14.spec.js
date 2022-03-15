describe('LOGIN', ()=> {
    it('Check if username invalid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get(':nth-child(2) > .undefined').type('superadmin3'); //khong nhap vao textbox username
        cy.get(':nth-child(3) > .undefined').type('{alt}'); //nhap vao textbox password

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const message = cy.get(':nth-child(3) > .text-red-600')
        const invalidText = '*Yêu cầu mật khẩu'
        message.should('have.text', invalidText)
    });
});