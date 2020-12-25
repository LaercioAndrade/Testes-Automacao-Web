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
}
export default testElements;