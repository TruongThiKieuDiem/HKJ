describe('LOGIN', ()=> {
    before(function(){
        cy.fixture('data_login09').then(function(data){
          this.data = data
        })
    })
    it('Check if username invalid and password invalid', function(){
        cy.visit('http://115.79.60.98:3000/login')
        cy.get('form > :nth-child(2) > .undefined').eq(0).type(this.data.Username); 
        cy.get('.relative > .undefined').type(this.data.Password); 

        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
        
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Tên đăng nhập hoặc mật khẩu không hợp lệ.'
        alert.should('contain.text', expectedAlert)
    })
})