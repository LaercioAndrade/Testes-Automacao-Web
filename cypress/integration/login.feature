Feature: Realizar Login no site

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
    When  excluo a Movimentação
    Then  valido se a movimentação foi excluida com sucesso


Scenario: Validar mensagem de erro na criação de conta com email já cadastrado
    Given  que acesso o site
    When   preencho um email ja cadastrado na base na tela de novo usuário
    Then   valido se aparece a mensagem de endereço de email já utilizado

Scenario: Validar mensagem de erro na criação de usuário quando não preenche o nome
    Given  que acesso o site
    When   acesso a tela de cadastrado
    And    preencho os dados faltando o campo nome
    Then   valido se aparece a mensagem de erro referente ao nome

Scenario: Validar mensagem de erro na criação de usuário quando não preenche o email
    Given  que acesso o site
    When   acesso a tela de cadastrado
    And    preencho os dados faltando o campo email
    Then   valido se aparece a mensagem de erro referente ao email 

Scenario: Validar mensagem de erro na criação de usuário quando não preenche a senha
    Given  que acesso o site
    When   acesso a tela de cadastrado
    And    preencho os dados faltando o campo senha
    Then   valido se aparece a mensagem de erro referente a senha
    
Scenario: Validar mensagem de erro quando adiciona uma conta já cadastrada
    Given   que acesso o site
    When    preencho o email e senha
    And     adiciono uma conta já existente
    Then    valido se aparece a mensagem de conta já existente para o nome inserido