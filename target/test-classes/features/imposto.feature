#language: pt
Funcionalidade: Calculo do imposto de renda de uma pessoa fisica.

  Esquema do Cenario: Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.
                Dado que recebo o salário bruto no valor de <valor_bruto>
              Quando realizo o cálculo do imposto
               Então o percentual da aliquota deverá ser <aliquota>
                   E o valor do imposto caculado <imposto>

    Exemplos:

    | valor_bruto | aliquota | imposto |
    |  1710.78    |    0     |  0      |
    |  1710.79    |   7.5    | 1283.09 |
    |  2563.92    |   15     | 384.58  |
    |  3418.60    |   22.5   | 769.18  |
    |  4271.60    |   27.5   | 1174.69 |