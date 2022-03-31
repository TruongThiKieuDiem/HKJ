describe('LOGIN', ()=> {
    it('Check if username valid and password empty', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get('form > :nth-child(2) > .undefined').eq(0).type('superadmin3'); //khong nhap vao textbox username
        cy.get('.relative > .undefined').type('{alt}'); //nhap vao textbox password

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const message = cy.get('.relative > .text-red-600')
        const invalidText = '*Yêu cầu mật khẩu'
        message.should('have.text', invalidText)
    });
});