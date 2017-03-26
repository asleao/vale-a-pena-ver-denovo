Feature: Controlar a temparatura interna da sala de aula.

  Scenario Outline: Calcular a temperatura ambiente externa.
   Given os valores dos sensores X, Y, Z respectivamente <valorX>,<valorY>,<valorZ>
    When realizo a media dos valores de cada sensor
    Then o ar condicionado retorna o valor da <temperatura> ambiente

    Examples: Temperaturas positivas
    | valorX | valorY | valorZ | temperatura |
    |  20    |   20   |   20   |     20      |
    |  30    |   30   |   30   |     30      |

    Examples: Temperaturas negativas
    | valorX | valorY | valorZ | temperatura |
    |  -1    |   -1   |   -1   |     -1      |
    |  -5    |   -5   |   -5   |     -5      |


#  Scenario Outline: Calcular a temperatura ambiente interna.
#    Given os valores dos sensores X, Y, Z respectivamente <valorX>,<valorY>,<valorZ>
#    When realizo a media dos valores de cada sensor
#    Then o sensor retorna a quantidade de <pessoas> na sala de aula
#
#    Examples: Quantidade de pessoas na sala
#      | valorX | valorY | valorZ |  pessoas    |
#      |  20    |   20   |   20   |     20      |
#      |  30    |   30   |   30   |     30      |

