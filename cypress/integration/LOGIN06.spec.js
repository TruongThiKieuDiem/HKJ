describe ('LOGIN', () => {
before(function(){
        cy.fixture('data_login06').then(function(data){
        this.data = data
 }) //lay du lieu kiem thu
})
it('Check if username valid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get('form > :nth-child(2) > .undefined').eq(0).type(this.data.Username); //nhap vao textbox Ten dang nhap
        cy.get('.relative > .undefined').type(this.data.Password); //nhap vao textbox Mat khau

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const alert = cy.get('.Toastify') 
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.' //ket qua mong doi
        alert.should('contain.text', expectedAlert) //so sanh ket qua thuc te voi ket qua mong doi
        })
})