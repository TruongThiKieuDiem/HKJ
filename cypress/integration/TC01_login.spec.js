describe('Hack Kanji BE - Login', function(){
    beforeEach(() => {
        cy.visit('http://115.79.60.98:3000/login')
        cy.title().should('eq', 'Login Page | HACK KANJI')
    })
    it ('check font size, corlor of title',function(){
        cy.get('.font-medium')
            .should('be.visible') //kiem tra ton tai tieu de cua tr
            .and('have.text','Đăng nhập vào tài khoản') //kiem tra text cua tieu de
    })
    it ('check font size, corlor of title lable username',function(){
        cy.get(':nth-child(2) > .text-gray-light')
            .should('be.visible') //kiem tra lable ton tai
            .and('have.text','Tên đăng nhập') //kiem tra text lable username
    })
    it ('check font size, corlor of title lable password',function(){
        cy.get(':nth-child(3) > .text-gray-light') 
            .should('be.visible') //kiem tra label ton tai
            .and('have.text','Mật khẩu') //kiem tra text lable password
    })
    it ('validate password empty', function(){
        cy.get(':nth-child(2) > .undefined').type('superadmin3'); //nhap vao textbox username: superadmin3
        cy.get(':nth-child(3) > .undefined').type('{alt}'); //tro toi textbox password: khong nhap
        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
         
        cy.get('.text-red-600').should('have.text','*Yêu cầu mật khẩu') //kiem tra thong bao loi o textbox password
    })
    it ('validate username empty', function(){
        cy.get(':nth-child(2) > .undefined').type('{alt}'); //tro toi textbox username: khong nhap
        cy.get(':nth-child(3) > .undefined').type('Abc123!@#'); //nhap vao textbox password: Abc123!@#
        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
         
        cy.get('.text-red-600').should('have.text','*Yêu cầu tên đăng nhập') //kiem tra thong bao loi o textbox username
    })
    it ('validate username and password empty', function(){
        cy.get(':nth-child(2) > .undefined').type('{alt}'); //tro toi textbox username: khong nhap
        cy.get(':nth-child(3) > .undefined').type('{alt}'); //tro toi textbox password: khong nhap
        cy.get('.mt-6 > .w-full').click(); //click vao button dang nhap
         
        cy.get(':nth-child(2) > .text-red-600').should('have.text','*Yêu cầu tên đăng nhập') //kiem tra thong bao loi o textbox username
        cy.get(':nth-child(3) > .text-red-600').should('have.text','*Yêu cầu mật khẩu') //kiem tra thong bao loi o textbox password
    })

})