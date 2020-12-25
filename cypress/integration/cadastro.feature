Feature: Acessar site Seu Barriga

 Scenario: Cadastrar novo usuário
    Given que acesso o site 
    When  clico em novo usuário
    And   preencho todos os campos
    Then  valido se o usuário é criado com sucesso


Scenario: Realizar Login
    Given que acesso o site
    When  preencho o email e senha
    Then  valido se o login é realizado com sucesso

Scenario: Adicionar Conta
    Given que acesso o site
    And   preencho o email e senha
    When  clico para adicionar a conta
    Then  valido se a conta é adicionada com sucesso

Scenario: Adicionar Movimentção de Receita na Conta
    Given que acesso o site
    And   preencho o email e senha
    When  Crio uma Movimentação de Receita
    Then  Valido se a Movimentação foi adicionada com sucesso

Scenario: Adicionar Movimentação de Receita Pendente na Conta
    Given que acesso o site
    And   preencho o email e senha
    When  Crio uma Movimentação de Receita com status Pendente
    Then  Valido se a Movimentação foi adicionada com sucesso

Scenario: Adicionar Despesa na Conta do Itaú
   Given  que acesso o site
    And   preencho o email e senha
    When  Crio uma Movimentação de Despesa com status Pago para a conta do itaú
    Then  Valido se a Movimentação de Despesa foi adicionada com sucesso

Scenario: Adicionar Saldo na Conta da Nubank
    Given que acesso o site
    And   preencho o email e senha
    When  Crio uma Movimentação de Receita da conta da Nubank
    Then  Valido se a Movimentação foi adicionada com sucesso

Scenario: Adicionar Movimentação de Receita Pendente na Conta da Nubank
    Given que acesso o site
    And   preencho o email e senha
    When  Crio uma Movimentação de Receita com status Pendente para a conta da Nubank
    Then  Valido se a Movimentação foi adicionada com sucesso

Scenario: Remover Movimentação
    Given que acesso o site
    And   preencho o email e senha
    When  excluo o Movimentação
    Then  valido se a movimentação foi excluida com sucesso