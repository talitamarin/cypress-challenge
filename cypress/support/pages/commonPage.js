/// <reference types = "cypress" />

export default {

    acessWebsite() {
        cy.visit('https://demoqa.com/')
        .get('.banner-image')
        .should('be.visible')
    }
 
}
   