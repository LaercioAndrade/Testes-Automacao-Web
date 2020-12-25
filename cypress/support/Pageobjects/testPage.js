///<reference types="Cypress"/>

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")


//acessar site
class TestPage {
    acessarsite(){
        cy.visit(url)
        cy.wait(2000)
        //cy.screenshot()
    }

    //clicar novo cadastro
     acessartelacadastro(){
         cy.get(testelements.novousuario()).click()
     }

    //Realizar cadastro    
     preenchernome(){
         cy.get(testelements.nome()).type('Laércio')
     }

     preencheremail(){
         cy.get(testelements.email()).type('testelaercio22@hotmail.com')
     }

     inserirsenha(){
         cy.get(testelements.senha()).type('1234')
     }
     botaoconfirmar(){
         cy.get(testelements.botaoconfirmar()).first().click()
     }
     confirmarcadastro(){
         cy.get(testelements.confirmarcadastro()).contains('Usuário inserido com sucesso')
         cy.screenshot()
     }
     preenchemaillogin(){
         cy.get(testelements.preencheremail()).type('testelaercio21@hotmail.com')
     }
     preenchersenhalogin(){
         cy.get(testelements.preenchersenha()).type('1234')
     }
     botaoentrar(){
         cy.get(testelements.botaoentrar()).first().click()
     }
     validarlogin(){
         cy.get(testelements.acesso()).contains('Bem vindo, Laércio!')
     }
}
export default TestPage;