/*global Given, Then, When*/

import TestPage from '../Pageobjects/testPage'
const PageTest = new TestPage


Given("que acesso o site", () => {
   PageTest.acessarsite();
})

When("clico em novo usuário", () => {
   PageTest.acessartelacadastro();
})

And("preencho todos os campos", () =>{
    PageTest.preenchernome();
    PageTest.preencheremail();
    PageTest.inserirsenha();
    PageTest.botaoconfirmar();
})

Then("valido se o usuário é criado com sucesso", () =>{
    PageTest.confirmarcadastro();
})

//segundo cenário
When("preencho o email e senha", () =>{
   PageTest.preenchemaillogin();
   PageTest.preenchersenhalogin();
   PageTest.botaoentrar();
})

Then ("valido se o login é realizado com sucesso", () =>{
    PageTest.validarlogin();
})

//Adicionar conta

And("preencho o email e senha", () =>{
    PageTest.preenchemaillogin();
    PageTest.preenchersenhalogin();
    PageTest.botaoentrar();
})

When("clico para adicionar a conta", () =>{
    PageTest.Adicionarconta();
})

Then("valido se a conta é adicionada com sucesso", ()=> {
    PageTest.Validarconta()
})
