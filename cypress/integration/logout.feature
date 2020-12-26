Feature: Realizar Logout no site

Scenario: Realizar logout 
    Given   que acesso o site
    When    preencho o email e senha
    And     clico em sair 
    Then    valido se o sistema apresenta a tela de login