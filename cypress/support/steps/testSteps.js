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

//Adicionar Movimentação
And("preencho o email e senha", () =>{
    PageTest.preenchemaillogin();
    PageTest.preenchersenhalogin();
    PageTest.botaoentrar();
})

When("Crio uma Movimentação de Receita", ()=> {
    PageTest.MovimentaçãoPago()
})
Then("Valido se a Movimentação foi adicionada com sucesso", ()=> {
    PageTest.Mensagemdemovimentaçãoadicionada()
})

//Adicionar status Movimentação Pendente
When("Crio uma Movimentação de Receita com status Pendente", ()=>{
    PageTest.MovimentaçãoPendente()
})

//Adicionar Despesa na conta
When("Crio uma Movimentação de Despesa com status Pago para a conta do itaú", ()=>{
    PageTest.AdicionarDespesa()
})
Then("Valido se a Movimentação de Despesa foi adicionada com sucesso", ()=> {
    PageTest.Mensagemdemovimentaçãoadicionada()
})

//Adicionar Saldo na conta da Nubank
When("Crio uma Movimentação de Receita da conta da Nubank", ()=>{
    PageTest.AdicionarSaldoNubank()
})

//Adicionar Saldo Pendente Nubank
When("Crio uma Movimentação de Receita com status Pendente para a conta da Nubank", ()=>{
    PageTest.AdicionarSaldoPendenteNubank()
})

//Remover Movimentação
When("excluo o Movimentação", ()=>{
    PageTest.ExcluirMovimentação()
})
Then("valido se a movimentação foi excluida com sucesso", ()=>{
    PageTest.Mensagemdemovimentaçãoexcluida()
})