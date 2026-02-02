/// <reference types ="cypress" />

  

const elements = {
    buttons: {
      checkbox: ".checkbox-custom > .material-symbols-outlined",
      login: ".btn.w-full > span:nth-child(1)"
    }
}
export default{
    login(email, password){
        cy.get("#email").type(email)
        cy.get('[name="password"]').type(password)
        cy.get(elements.buttons.checkbox).click()
        cy.get(elements.buttons.login).should('exist').click()
    },

    CheckMessageError(mensagem){
      cy.get('.alert-error').should('be.visible').and('contain.text', mensagem)
    }
}