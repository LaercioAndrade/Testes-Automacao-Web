class testElements {
    //primeiro cenário
    novousuario = () => {return ':nth-child(2) > a' }
    nome = () => {return '#nome'}
    email = () => {return '#email'}
    senha = () => {return '#senha' }
    botaoconfirmar = () => {return '.btn'}
    confirmarcadastro = () => {return '.alert'}
   
    //segundo cenário
   preencheremail = () =>{return '#email'}
   preenchersenha = () =>{return '#senha'}
   botaoentrar = () =>{return '.btn'}
   acesso = () =>{return '.alert'}

   //Terceiro cenário
   contas = () =>{return '.dropdown-toggle'}
   adicionar = () =>{return '.dropdown-menu > li:nth-child(1) > a'}
   nomeconta = () =>{return '.form-control'}
   botaosalvar = () =>{return '.btn'}
   mensagemcontaadicionada = () =>{return '.alert'}

   //Quarto cenário
   criarmovimentação = () =>{return ':nth-child(3) > a'}
   datamovimentação = () =>{return '#data_transacao'}
   datapagamento = () =>{return '#data_pagamento'}
   descrição = () =>{return '#descricao'}
   interessado = () =>{return '#interessado'}
   valor = () =>{return '#valor'}
   statuspago = () =>{return '#status_pago'}
   botaosalvar = () =>{return '.btn'}
   mensagemmovimentação = () =>{return '.alert'}

   //Quinto cenário
   statuspendente = () =>{return '#status_pendente'}


   //Sexto cenário
   despesa = () =>{return '#tipo'}

   //Sétimo cenário
   tipoconta = ()=>{return '#conta'}

   //Oitavo cenário
   resumomensal = ()=>{return ':nth-child(4) > a'}
   excluirmovimentação = ()=>{return ':nth-child(1) .glyphicon'}
   mensagemmovimentaçãoremovida = ()=>{return '.alert'}

   //Nono cenário
   mensagememailjautilizado = ()=>{return '.alert'}


   //Decimo cenário
   mensagemerronome = ()=>{return '.alert'}

   //Decimo primeiro cenario
   mensagemerroemail = ()=>{return '.alert'}

   //Decimo segundo cenário
   mensagemerrosenha = ()=>{return '.alert'}

    //Decimo terceiro cenário
    mensagemerroconta = ()=>{return '.alert'}

    //Decimo quarto cenario
    botaosair = ()=>{return ':nth-child(5) > a'}
    validarlogout = ()=>{return '.navbar-brand'}
}
export default testElements;