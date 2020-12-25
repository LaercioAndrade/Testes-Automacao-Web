Feature: Realizo login no site

Scenario: Realizar Login
    Given que acesso o site
    When  preencho o email e senha
    Then  valido se o login é realizado com sucesso

Scenario: Adicionar Conta
    Given que acesso o site
    And   preencho o email e senha
    When  clico para adicionar a conta
    Then  valido se a conta é adicionada com sucesso
    