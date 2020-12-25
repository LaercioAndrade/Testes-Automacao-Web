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