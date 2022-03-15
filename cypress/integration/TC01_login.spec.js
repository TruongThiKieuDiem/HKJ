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
})