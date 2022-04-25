describe('Test Font Family - Font Size', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('Check font-family of Thêm tài khoản title', () => {
        // check font-family
        cy.contains('Thêm tài khoản').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Thêm tài khoản title', () => {
        // check font-size
        cy.contains('Thêm tài khoản').should('have.css','font-size', '28px')
    });

    it('Check color of Thêm tài khoản', () => {
        cy.contains('Thêm tài khoản').should('have.css', 'color', 'rgb(63, 67, 74)')
    });
    it('Check font-family of Họ field title', () => {
        // check font-family
        cy.contains('Họ').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Họ field title', () => {
        // check font-size
        cy.contains('Họ').should('have.css','font-size', '14px')
    });

    it('Check color of Tên', () => {
        cy.contains('Họ').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Tên field title', () => {
        // check font-family
        cy.contains('Tên').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Tên field title', () => {
        // check font-size
        cy.contains('Tên').should('have.css','font-size', '14px')
    });

    it('Check color of Tên', () => {
        cy.contains('Tên').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Email field title', () => {
        // check font-family
        cy.contains('Email').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Email field title', () => {
        // check font-size
        cy.contains('Email').should('have.css','font-size', '14px')
    });

    it('Check color of Email', () => {
        cy.contains('Email').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Username field title', () => {
        // check font-family
        cy.contains('Username').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Username field title', () => {
        // check font-size
        cy.contains('Username').should('have.css','font-size', '14px')
    });

    it('Check color of Username', () => {
        cy.contains('Username').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Phone field title', () => {
        // check font-family
        cy.contains('Phone').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Phone field title', () => {
        // check font-size
        cy.contains('Phone').should('have.css','font-size', '14px')
    });

    it('Check color of Phone', () => {
        cy.contains('Phone').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Phong ban field title', () => {
        // check font-family
        cy.contains('Phòng ban').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Phongf ban field title', () => {
        // check font-size
        cy.contains('Phòng ban').should('have.css','font-size', '14px')
    });

    it('Check color of Phòng ban', () => {
        cy.contains('Phòng ban').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Kích hoạt tài khoản BE field title', () => {
        // check font-family
        cy.contains('Kích hoạt tài khoản BE').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Kích hoạt tài khoản BE field title', () => {
        // check font-size
        cy.contains('Kích hoạt tài khoản BE').should('have.css','font-size', '14px')
    });

    it('Check color of Kích hoạt tài khoản BE', () => {
        cy.contains('Kích hoạt tài khoản BE').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Phân quyền field title', () => {
        // check font-family
        cy.contains('Phân quyền').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Phân quyền field title', () => {
        // check font-size
        cy.contains('Phân quyền').should('have.css','font-size', '14px')
    });

    it('Check color of Phân quyền', () => {
        cy.contains('Phân quyền').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
    it('Check font-family of Mật khẩu field title', () => {
        // check font-family
        cy.contains('Mật khẩu').should('have.css', 'font-family', '"Poppins"')
    });

    it('Check font-size of Mật khẩu field title', () => {
        // check font-size
        cy.contains('Mật khẩu').should('have.css','font-size', '14px')
    });

    it('Check color of Mật khẩu', () => {
        cy.contains('Mật khẩu').should('have.css', 'color', 'rgb(138, 144, 153)')
    });
});