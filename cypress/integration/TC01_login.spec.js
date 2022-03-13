describe('Hack Kanji BE - Login', function(){
    beforeEach(() => {
        cy.visit('http://115.79.60.98:3000/login')
        cy.title().should('eq', 'Login Page | HACK KANJI')
    })
    it ('check font size, corlor of title',function(){
        cy.get('.font-medium')
            .should('be.visible')
            .and('have.text','Đăng nhập vào tài khoản')
    })
    it ('check font size, corlor of title lable username',function(){
        cy.get(':nth-child(2) > .text-gray-light')
            .should('be.visible')
            .and('have.text','Tên đăng nhập')
    })
    it ('check font size, corlor of title lable password',function(){
        cy.get(':nth-child(3) > .text-gray-light')
            .should('be.visible')
            .and('have.text','Mật khẩu')
    })
    it ('validate password empty', function(){
        cy.get(':nth-child(2) > .undefined').type('superadmin3');
        cy.get(':nth-child(3) > .undefined').type('{alt}');
        cy.get('.mt-6 > .w-full').click();
         
        cy.get('.text-red-600').should('have.text','*Yêu cầu mật khẩu')
    })
    it ('validate username empty', function(){
        cy.get(':nth-child(2) > .undefined').type('{alt}');
        cy.get(':nth-child(3) > .undefined').type('Abc123!@#');
        cy.get('.mt-6 > .w-full').click();
         
        cy.get('.text-red-600').should('have.text','*Yêu cầu tên đăng nhập')
    })
    it ('validate username and password empty', function(){
        cy.get(':nth-child(2) > .undefined').type('{alt}');
        cy.get(':nth-child(3) > .undefined').type('{alt}');
        cy.get('.mt-6 > .w-full').click();
         
        cy.get(':nth-child(2) > .text-red-600').should('have.text','*Yêu cầu tên đăng nhập')
        cy.get(':nth-child(3) > .text-red-600').should('have.text','*Yêu cầu mật khẩu')
    })

})