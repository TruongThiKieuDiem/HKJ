describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('validate all fields are empty', function(){
        cy.get(':nth-child(1) > .undefined').type('{alt}');
        cy.get('.grid > :nth-child(2) > .undefined').type('{alt}');
        cy.get(':nth-child(3) > .undefined').type('{alt}');
        cy.get(':nth-child(4) > .undefined').type('{alt}');
        cy.get('.rounded-tl-none').type('{alt}');
        cy.get('form > :nth-child(6) > .undefined').type('{alt}');
        cy.get('.relative > .undefined').type('{alt}');
    })
    it ('Hightlight Error: Ho', () => {
        const message1 = cy.get(':nth-child(1) > .text-red-600')
        const invalidText1 = '*Yêu cầu Họ'
        message.should('have.text', invalidText1)
    });
    it ('Hightlight Error: Ten', () => {
        const message2 = cy.get('.grid > :nth-child(2) > .text-red-600')
        const invalidText2 = '*Yêu cầu Tên'
        message.should('have.text', invalidText2)
    });
    it ('Highlight Error: Email', () => {
    const message3 = cy.get(':nth-child(3) > .text-red-600')
    const invalidText3 = '*Yêu cầu Email'
    message.should('have.text', invalidText3)
    });
    it ('Highlight Error: Username', () => {
    const message4 =cy.get(':nth-child(4) > .text-red-600')
    const invalidText4 = '*Yêu cầu username'
    message.should('have.text', invalidText4)
    });
    it ('Highlight Error: Phone number', () => {
    const message5 = cy.get('.flex-grow > .text-red-600')
    const invalidText5 = '*Yêu cầu Số điện thoại'
    message.should('have.text', invalidText5)
    });
    it ('Highlight Error: De[artment', () => {
    const message6 = cy.get(':nth-child(6) > .text-red-600')
    const invalidText6 = '*Yêu cầu phòng ban'
    message.should('have.text', invalidText6)
    });
    it ('Highlight Error: Password', () => {
    const message7 = cy.get(':nth-child(9) > .text-red-600')
    const invalidText7 = '*Yêu cầu mật khẩu'
    message.should('have.text', invalidText7)
    });
})