describe('LOGIN', ()=> {
    it('Check if username invalid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get(':nth-child(2) > .undefined').type('{alt}'); //khong nhap vao textbox username
        cy.get(':nth-child(3) > .undefined').type('123456'); //nhap vao textbox password

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const message = cy.get(':nth-child(2) > .text-red-600')
        const invalidText = '*Yêu cầu tên đăng nhập'
        message.should('have.text', invalidText)
    });
});