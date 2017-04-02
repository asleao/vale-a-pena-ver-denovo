#language: pt
Funcionalidade: Contas com a notação de uma Calculadora Polonesa.

  Esquema do Cenario: Calcular expressões.
                Dado que recebo uma sequencia de <operações> a serem feitas
              Quando realizo o cálculo
               Então o <resultado> deverá ser exibido para o usuário.


    Exemplos:

    |       operações       |  resultado    |
    |  5 1 2 + 4 * + 3 -    |     14.0      |
