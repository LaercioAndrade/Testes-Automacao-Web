///<reference types="Cypress"/>


import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")


//acessar site
class TestPage {

    acessarsite(){
        cy.visit(url)
        cy.wait(2000)
        cy.screenshot()
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
         cy.get(testelements.email()).type('testelaercio52@hotmail.com')
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
         cy.get(testelements.preencheremail()).type('testelaercio22@hotmail.com')
     }
     preenchersenhalogin(){
         cy.get(testelements.preenchersenha()).type('1234')
     }
     botaoentrar(){
         cy.get(testelements.botaoentrar()).first().click()
     }
     validarlogin(){
         cy.get(testelements.acesso()).contains('Bem vindo, Laércio!')
         cy.screenshot()
     }

     //Adicionar conta
     Adicionarconta(){
         cy.get(testelements.contas()).first().click()
         cy.get(testelements.adicionar()).first().click()
         cy.get(testelements.nomeconta()).type('C6 Bank')
         cy.get(testelements.botaosalvar()).first().click()
         
     }

     Validarconta(){
        cy.get(testelements.mensagemcontaadicionada()).contains('Conta adicionada com sucesso!')
        cy.screenshot()
     }

     //Adicionar pagamento com situação Pago
     
     Botaocriarmovimentação(){
         cy.get(testelements.criarmovimentação()).click()
     }

     MovimentaçãoPago(){
         cy.get(testelements.criarmovimentação()).click()
         cy.get(testelements.datamovimentação()).type('25/12/2020')
         cy.get(testelements.datapagamento()).type('25/12/2020')
         cy.get(testelements.descrição()).type('Adicionando saldo na conta do Itáu')
         cy.get(testelements.interessado()).type('Laércio Andrade')
         cy.get(testelements.valor()).type('1000')
         cy.get(testelements.statuspago()).click()
         cy.get(testelements.botaosalvar()).click()
     }
     Mensagemdemovimentaçãoadicionada(){
         cy.get(testelements.mensagemmovimentação()).contains('Movimentação adicionada com sucesso!')
         cy.screenshot()
     }

     //Adicionar pagamento com situação Pendente

     MovimentaçãoPendente(){
        cy.get(testelements.criarmovimentação()).click()
        cy.get(testelements.datamovimentação()).type('25/12/2020')
        cy.get(testelements.datapagamento()).type('25/12/2020')
        cy.get(testelements.descrição()).type('Adicionando saldo Pendente na conta do Itáu')
        cy.get(testelements.interessado()).type('Laércio Andrade')
        cy.get(testelements.valor()).type('1000')
        cy.get(testelements.statuspendente()).click()
        cy.get(testelements.botaosalvar()).click()
        cy.screenshot()
     }
    
     //Adicionar Despesa na conta Itaú
     AdicionarDespesa(){
        cy.get(testelements.criarmovimentação()).click()
        cy.get(testelements.despesa()).select('Despesa')
        cy.get(testelements.datamovimentação()).type('25/12/2020')
        cy.get(testelements.datapagamento()).type('25/12/2020')
        cy.get(testelements.descrição()).type('Adicionando despesa na conta do Itáu')
        cy.get(testelements.interessado()).type('Laércio Andrade')
        cy.get(testelements.valor()).type('1000')
        cy.get(testelements.statuspendente()).click()
        cy.get(testelements.botaosalvar()).click()
        cy.screenshot()
     }

    //Adicionar Receita na conta da Nubank
    AdicionarSaldoNubank(){
         cy.get(testelements.criarmovimentação()).click()
         cy.get(testelements.datamovimentação()).type('25/12/2020')
         cy.get(testelements.datapagamento()).type('25/12/2020')
         cy.get(testelements.descrição()).type('Adicionando saldo na conta da Nubank')
         cy.get(testelements.interessado()).type('Laércio Andrade')
         cy.get(testelements.valor()).type('1000')
         cy.get(testelements.tipoconta()).select('Nubank')
         cy.get(testelements.statuspago()).click()
         cy.get(testelements.botaosalvar()).click()
         cy.screenshot()
    }


    //Adicionar Receita Pendente da nubank
    AdicionarSaldoPendenteNubank(){
         cy.get(testelements.criarmovimentação()).click()
         cy.get(testelements.datamovimentação()).type('25/12/2020')
         cy.get(testelements.datapagamento()).type('25/12/2020')
         cy.get(testelements.descrição()).type('Adicionando saldo com status Pendente na conta da Nubank')
         cy.get(testelements.interessado()).type('Laércio Andrade')
         cy.get(testelements.valor()).type('1000')
         cy.get(testelements.tipoconta()).select('Nubank')
         cy.get(testelements.statuspendente()).click()
         cy.get(testelements.botaosalvar()).click()
         cy.screenshot()
    } 

    //Remover Movimentação
    ExcluirMovimentação(){
        cy.get(testelements.resumomensal()).click()
        cy.get(testelements.excluirmovimentação()).first().click()
    }

    Mensagemdemovimentaçãoexcluida(){
        cy.get(testelements.mensagemmovimentaçãoremovida()).contains('Movimentação removida com sucesso!')
        cy.screenshot()
    }

    //Mensagem de erro quando o email já está cadastrado
    Mensagemdeerroemailjacadastrado(){
        cy.get(testelements.mensagememailjautilizado()).contains("Endereço de email já utilizado")
        cy.screenshot()
    }

    //Mensagem de erro quando falta preencher o nome no cadastro
    Mensagemerronome(){
        cy.get(testelements.mensagemerronome()).contains("Nome é um campo obrigatório")
        cy.screenshot()
        
    }

    //Mensagem de erro quando falta preencher o email no cadastro
    Mensagemerroemail(){
        cy.get(testelements.mensagemerroemail()).contains("Email é um campo obrigatório")
        cy.screenshot()
    }

    //Mensagem de erro quando falta preencher a senha no cadastro
    Mensagemerrosenha(){
        cy.get(testelements.mensagemerrosenha()).contains("Senha é um campo obrigatório")
        cy.screenshot()
    }

    //Mensagem  de erro quando adiciona uma conta já cadastrada
    Mensagemerroconta(){
        cy.get(testelements.mensagemerroconta()).contains("Já existe uma conta com esse nome!")
        cy.screenshot()
    }

    //Realizar logout
    botaosair(){
        cy.get(testelements.botaosair()).click()
    }
    validarlogout(){
        cy.get(testelements.validarlogout()).contains('Seu Barriga')
        cy.screenshot()
    }
}
export default TestPage;