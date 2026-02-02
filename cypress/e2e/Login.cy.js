/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import pages from "../support/pages/pageseexport"
describe('Testes de login da DemoPHP', () => {
  beforeEach(() =>{
    cy.visit('/login')
  })
  
  it('Teste 1 - Login com sucesso',() =>{
     cy.fixture('cadastro').then(user => {
       pages.login(user.user1.email, user.user1.senha)
     }) 
  })

  it('Teste 2 - Login com Email não cadastrado', ()=>{
    const user = faker.internet.email()
    const senha = faker.internet.password({ length: 10 })

     pages.login(user, senha)
     pages.CheckMessageError('Error Invalid Credentials')
  })

  it('Teste 3 - Login com senha inválida', () =>{
    cy.fixture('cadastro').then(user => {
      pages.login(user.user1.email, "error1234")
      pages.CheckMessageError('Error Invalid Credentials')
    })
  })

  it('Teste 4 - Login com dados randômicos', () =>{
    const email = faker.internet.email()
    const password = faker.internet.password()

    pages.login(email, password)
    pages.CheckMessageError('Error Invalid Credentials')
  })
}) 