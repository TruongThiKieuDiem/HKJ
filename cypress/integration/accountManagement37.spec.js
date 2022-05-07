describe('Account Administrator Management', () => {
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('Upload image png 0MB', function(){
        cy.get('input[type=file]').attachFile('png_0MB.png')
    })
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'File không hợp lệ!!'
        alert.should('contain.text', expectedAlert)
    });
})