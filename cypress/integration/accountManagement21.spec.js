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
        cy.get('form > :nth-child(9) > .text-gray-light').click();
    })
    it ('Hightlight Error: Ho', () => {
        const message1 = cy.get(':nth-child(1) > .text-red-600')
        const invalidText1 = '*Yêu cầu Họ'
        message1.should('have.text', invalidText1)
    });
    it ('Hightlight Error: Ten', () => {
        const message2 = cy.get('.grid > :nth-child(2) > .text-red-600')
        const invalidText2 = '*Yêu cầu Tên'
        message2.should('have.text', invalidText2)
    });
    it ('Highlight Error: Email', () => {
    const message3 = cy.get(':nth-child(3) > .text-red-600')
    const invalidText3 = '*Yêu cầu Email'
    message3.should('have.text', invalidText3)
    });
    it ('Highlight Error: Username', () => {
    const message4 =cy.get(':nth-child(4) > .text-red-600')
    const invalidText4 = '*Yêu cầu username'
    message4.should('have.text', invalidText4)
    });
    it ('Highlight Error: Phone number', () => {
    const message5 = cy.get('.flex-grow > .text-red-600')
    const invalidText5 = '*Yêu cầu số điện thoại'
    message5.should('have.text', invalidText5)
    });
    it ('Highlight Error: De[artment', () => {
    const message6 = cy.get(':nth-child(6) > .text-red-600')
    const invalidText6 = '*Yêu cầu phòng ban'
    message6.should('have.text', invalidText6)
    });
    it ('Highlight Error: Password', () => {
    const message7 = cy.get('.relative > .text-red-600')
    const invalidText7 = '*Yêu cầu mật khẩu'
    message7.should('have.text', invalidText7)
    });
})