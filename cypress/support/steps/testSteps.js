/*global Given, Then, When*/

import TestPage from '../Pageobjects/testPage'
const PageTest = new TestPage

//Realizar cadastro
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
When("excluo a Movimentação", ()=>{
    PageTest.ExcluirMovimentação()
})
Then("valido se a movimentação foi excluida com sucesso", ()=>{
    PageTest.Mensagemdemovimentaçãoexcluida()
})

//Mensagem de erro email já cadastrado
When("preencho um email ja cadastrado na base na tela de novo usuário", ()=>{
    PageTest.acessartelacadastro();
    PageTest.preenchernome();
    PageTest.preencheremail();
    PageTest.inserirsenha();
    PageTest.botaoconfirmar();
})

Then("valido se aparece a mensagem de endereço de email já utilizado", ()=>{
    PageTest.Mensagemdeerroemailjacadastrado()
})

//Mensagem erro campo nome obrigatório
When("acesso a tela de cadastrado", ()=>{
    PageTest.acessartelacadastro();
})

And("preencho os dados faltando o campo nome", ()=>{
    PageTest.preencheremail();
    PageTest.inserirsenha();
    PageTest.botaoconfirmar();
})
Then("valido se aparece a mensagem de erro referente ao nome", ()=>{
    PageTest.Mensagemerronome();
})
    
//Mensagem ero campo email obrigatório
And("preencho os dados faltando o campo email", ()=>{
    PageTest.preenchernome();
    PageTest.inserirsenha();
    PageTest.botaoconfirmar();
})
Then("valido se aparece a mensagem de erro referente ao email", ()=>{
    PageTest.Mensagemerroemail();
})

//Mensagem erro campo senha obrigatório
And("preencho os dados faltando o campo senha", ()=>{
    PageTest.preenchernome();
    PageTest.preencheremail();
    PageTest.botaoconfirmar()
})

Then("valido se aparece a mensagem de erro referente a senha", ()=>{
    PageTest.Mensagemerrosenha();
})

//Mensagem de erro conta já cadastrada
And("adiciono uma conta já existente", ()=>{
    PageTest.Adicionarconta();
})

Then("valido se aparece a mensagem de conta já existente para o nome inserido", ()=>{
    PageTest.Mensagemerroconta();
})

//Realizar Logout
And("clico em sair", ()=>{
    PageTest.botaosair()
})

Then("valido se o sistema apresenta a tela de login", ()=>{
    PageTest.validarlogout()
})