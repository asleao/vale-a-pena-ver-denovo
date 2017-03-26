#language: pt
Funcionalidade: Controlar a temparatura interna da sala de aula.

  Esquema do Cenario: Calcular a temperatura ambiente externa.
    Dado os valores dos sensores X, Y, Z respectivamente <valorX>,<valorY>,<valorZ>
    Quando realizo a media dos valores de cada sensor
    Então o ar condicionado retorna o valor da <temperatura> ambiente

    Exemplos: Temperaturas positivas
    | valorX | valorY | valorZ | temperatura |
    |  20    |   20   |   20   |     20      |
    |  30    |   30   |   30   |     30      |

    Exemplos: Temperaturas negativas
    | valorX | valorY | valorZ | temperatura |
    |  -1    |   -1   |   -1   |     -1      |
    |  -5    |   -5   |   -5   |     -5      |


  Esquema do Cenario: Calcular a temperatura ambiente interna.
    Dado que possuem <quantidadePessoas> pessoas em uma sala de aula
    Quando os sensores <sensorX>, <sensorY> e <sensorZ> identificam a quantidade de pessoas na sala
    Então o ar condicionado aumenta a <temperatura> em 1 grau para cada pessoa identificada.

    Exemplos: Quantidade de pessoas na sala
      | quantidadePessoas | sensorX | sensorY | sensorZ | temperatura |
      |       0           |    0    |    0    |   0     |     0       |
      |       15          |    15   |    15   |   15    |     15      |
      |       30          |    30   |    30   |   30    |     30      |



