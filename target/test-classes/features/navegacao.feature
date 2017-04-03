#language: pt
Funcionalidade: Sistema de navegação da Empresa Foobar.

  Esquema do Cenario: Verificar cidade de acordo com o ponto cardeal
                Dado que recebo uma lista: <cidades>
              Quando informo o <ponto_cardeal>
               Então o sistema deverá retornar a <cidade> que está mais próxima daquele ponto

    Exemplos:

    |               cidades                      | ponto_cardeal     |  cidade |
    |  Vitoria, Serra, Colatina, Pedro Canario   |      norte        |  Pedro Canario |
