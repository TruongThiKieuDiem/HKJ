describe('LOGIN', ()=> {
    it('Check if username textbox empty', function(){
        cy.visit('http://115.79.60.98:3000/login') //di den trang dang nhap
        cy.get('form > :nth-child(2) > .undefined').eq(0).type('{alt}'); //khong nhap vao textbox Ten dang nhap
        cy.get('.relative > .undefined').type('123456'); //nhap vào textbox Mat khau: 123456

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const message1 = cy.get('form > :nth-child(2) > .text-red-600')
        const invalidText1 = '*Yêu cầu tên đăng nhập' //ket qua mong doi
        message1.should('have.text', invalidText1) //so sanh ket qua mong doi voi ket qua thuc te

    });
});