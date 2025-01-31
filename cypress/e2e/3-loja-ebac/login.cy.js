///< reference types ="cypress"/>

describe('Funcionalidade: login', () => {
    
    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('rafa.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, rafa.teste (não é rafa.teste? Sair)')

    })
})