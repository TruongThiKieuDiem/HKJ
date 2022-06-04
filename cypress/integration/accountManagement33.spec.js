describe('Account Administrator Management', () => {
    beforeEach(function(){
        cy.fixture('data_am33').then(function(data){
          this.data = data
        })
    })
    it('LogIn', function(){
        cy.LOGIN()
    })
    it('Upload image svg', function(){
        cy.get('input[type=file]').attachFile('random_SVG.svg')
    })
    it ('Error Message', () => {
        const alert = cy.get('.Toastify')
        const expectedAlert = 'Không phải định dạng ảnh!!'
        alert.should('contain.text', expectedAlert)
    })
})