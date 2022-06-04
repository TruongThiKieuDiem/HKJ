describe('LOGIN', ()=> {
    before(function(){
        cy.fixture('data_login12').then(function(data){
          this.data = data
        })
    })
    it('Check if password textbox empty', function(){
        cy.visit('http://115.79.60.98:3000/login') 
        cy.get('form > :nth-child(2) > .undefined').eq(0).type(this.data.Username); //nhap vao textbox Ten dang nhap
        cy.get('.relative > .undefined').type('{alt}'); //khong nhap vao textbox mat khau

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const message = cy.get('.relative > .text-red-600')
        const invalidText = '*Yêu cầu mật khẩu' //ket qua mong doi
        message.should('have.text', invalidText) //so sanh ket qua mong doi voi ket qua thuc te
    });
});