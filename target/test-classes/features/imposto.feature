#language: pt
Funcionalidade: Calculo de imposto de renda de uma pessoa fisica.

  Esquema do Cenario: Testar se os valores de aliquota estao de acordo com o valor bruto.
                Dado possuo o <valor_bruto> e uma <aliquota>
              Quando aplico o percentual da <aliquota> no <valor_bruto>
               Então retorno o valor do <imposto> calculado

    Exemplos:

    | valor_bruto | aliquota | imposto |
    |  1710.78    |    0     |  0      |
    |  1710.79    |   7.5    | 1283.09 |
    |  2563.92    |   15     | 384.58  |
    |  3418.60    |   22.5   | 769.18  |
    |  4271.60    |   27.5   | 1174.69 |