$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Controlar a temparatura interna da sala de aula.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "os valores dos sensores X, Y, Z respectivamente \u003cvalorX\u003e,\u003cvalorY\u003e,\u003cvalorZ\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o ar condicionado retorna o valor da \u003ctemperatura\u003e ambiente",
  "keyword": "Então "
});
formatter.examples({
  "line": 9,
  "name": "Temperaturas positivas",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas",
  "rows": [
    {
      "cells": [
        "valorX",
        "valorY",
        "valorZ",
        "temperatura"
      ],
      "line": 10,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;1"
    },
    {
      "cells": [
        "20",
        "20",
        "20",
        "20"
      ],
      "line": 11,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;2"
    },
    {
      "cells": [
        "30",
        "30",
        "30",
        "30"
      ],
      "line": 12,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 11,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "os valores dos sensores X, Y, Z respectivamente 20,20,20",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o ar condicionado retorna o valor da 20 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 51
    },
    {
      "val": "20",
      "offset": 54
    }
  ],
  "location": "ArSteps.osValoresDosSensoresXYZRespectivamente(int,int,int)"
});
formatter.result({
  "duration": 201796850,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 76552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 37
    }
  ],
  "location": "ArSteps.oArCondicionadoRetornaOValorDaAmbiente(int)"
});
formatter.result({
  "duration": 2839907,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "os valores dos sensores X, Y, Z respectivamente 30,30,30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o ar condicionado retorna o valor da 30 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 48
    },
    {
      "val": "30",
      "offset": 51
    },
    {
      "val": "30",
      "offset": 54
    }
  ],
  "location": "ArSteps.osValoresDosSensoresXYZRespectivamente(int,int,int)"
});
formatter.result({
  "duration": 387272,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 51127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 37
    }
  ],
  "location": "ArSteps.oArCondicionadoRetornaOValorDaAmbiente(int)"
});
formatter.result({
  "duration": 329272,
  "status": "passed"
});
formatter.examples({
  "line": 14,
  "name": "Temperaturas negativas",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas",
  "rows": [
    {
      "cells": [
        "valorX",
        "valorY",
        "valorZ",
        "temperatura"
      ],
      "line": 15,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;1"
    },
    {
      "cells": [
        "-1",
        "-1",
        "-1",
        "-1"
      ],
      "line": 16,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;2"
    },
    {
      "cells": [
        "-5",
        "-5",
        "-5",
        "-5"
      ],
      "line": 17,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 16,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "os valores dos sensores X, Y, Z respectivamente -1,-1,-1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o ar condicionado retorna o valor da -1 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 48
    },
    {
      "val": "-1",
      "offset": 51
    },
    {
      "val": "-1",
      "offset": 54
    }
  ],
  "location": "ArSteps.osValoresDosSensoresXYZRespectivamente(int,int,int)"
});
formatter.result({
  "duration": 226376,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 30927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 37
    }
  ],
  "location": "ArSteps.oArCondicionadoRetornaOValorDaAmbiente(int)"
});
formatter.result({
  "duration": 147487,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "os valores dos sensores X, Y, Z respectivamente -5,-5,-5",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o ar condicionado retorna o valor da -5 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "-5",
      "offset": 48
    },
    {
      "val": "-5",
      "offset": 51
    },
    {
      "val": "-5",
      "offset": 54
    }
  ],
  "location": "ArSteps.osValoresDosSensoresXYZRespectivamente(int,int,int)"
});
formatter.result({
  "duration": 839148,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 28371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-5",
      "offset": 37
    }
  ],
  "location": "ArSteps.oArCondicionadoRetornaOValorDaAmbiente(int)"
});
formatter.result({
  "duration": 99175,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Calcular a temperatura ambiente interna.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 21,
  "name": "que possuem \u003cquantidadePessoas\u003e pessoas em uma sala de aula",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "os sensores \u003csensorX\u003e, \u003csensorY\u003e e \u003csensorZ\u003e identificam a quantidade de pessoas na sala",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "o ar condicionado aumenta a \u003ctemperatura\u003e em 1 grau para cada pessoa identificada.",
  "keyword": "Então "
});
formatter.examples({
  "line": 25,
  "name": "Quantidade de pessoas na sala",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala",
  "rows": [
    {
      "cells": [
        "quantidadePessoas",
        "sensorX",
        "sensorY",
        "sensorZ",
        "temperatura"
      ],
      "line": 26,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;1"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 27,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;2"
    },
    {
      "cells": [
        "15",
        "15",
        "15",
        "15",
        "15"
      ],
      "line": 28,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;3"
    },
    {
      "cells": [
        "30",
        "30",
        "30",
        "30",
        "30"
      ],
      "line": 29,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 27,
  "name": "Calcular a temperatura ambiente interna.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 21,
  "name": "que possuem 0 pessoas em uma sala de aula",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "os sensores 0, 0 e 0 identificam a quantidade de pessoas na sala",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "o ar condicionado aumenta a 0 em 1 grau para cada pessoa identificada.",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 12
    }
  ],
  "location": "ArSteps.quePossuemPessoasEmUmaSalaDeAula(int)"
});
formatter.result({
  "duration": 153088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 15
    },
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "ArSteps.osSensoresEIdentificamAQuantidadeDePessoasNaSala(int,int,int)"
});
formatter.result({
  "duration": 207707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "ArSteps.oArCondicionadoAumentaAEmGrauParaCadaPessoaIdentificada(int,int)"
});
formatter.result({
  "duration": 2495445,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Calcular a temperatura ambiente interna.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 21,
  "name": "que possuem 15 pessoas em uma sala de aula",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "os sensores 15, 15 e 15 identificam a quantidade de pessoas na sala",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "o ar condicionado aumenta a 15 em 1 grau para cada pessoa identificada.",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    }
  ],
  "location": "ArSteps.quePossuemPessoasEmUmaSalaDeAula(int)"
});
formatter.result({
  "duration": 139248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    },
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 21
    }
  ],
  "location": "ArSteps.osSensoresEIdentificamAQuantidadeDePessoasNaSala(int,int,int)"
});
formatter.result({
  "duration": 179592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "ArSteps.oArCondicionadoAumentaAEmGrauParaCadaPessoaIdentificada(int,int)"
});
formatter.result({
  "duration": 173117,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Calcular a temperatura ambiente interna.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-interna.;quantidade-de-pessoas-na-sala;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 21,
  "name": "que possuem 30 pessoas em uma sala de aula",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "os sensores 30, 30 e 30 identificam a quantidade de pessoas na sala",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "o ar condicionado aumenta a 30 em 1 grau para cada pessoa identificada.",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "ArSteps.quePossuemPessoasEmUmaSalaDeAula(int)"
});
formatter.result({
  "duration": 2965790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    },
    {
      "val": "30",
      "offset": 16
    },
    {
      "val": "30",
      "offset": 21
    }
  ],
  "location": "ArSteps.osSensoresEIdentificamAQuantidadeDePessoasNaSala(int,int,int)"
});
formatter.result({
  "duration": 177983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "ArSteps.oArCondicionadoAumentaAEmGrauParaCadaPessoaIdentificada(int,int)"
});
formatter.result({
  "duration": 155852,
  "status": "passed"
});
formatter.uri("features/calculadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Contas com a notação de uma Calculadora Polonesa.",
  "description": "",
  "id": "contas-com-a-notação-de-uma-calculadora-polonesa.",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Calcular expressões.",
  "description": "",
  "id": "contas-com-a-notação-de-uma-calculadora-polonesa.;calcular-expressões.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo uma sequencia de \u003coperações\u003e a serem feitas",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o \u003cresultado\u003e deverá ser exibido para o usuário.",
  "keyword": "Então "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "contas-com-a-notação-de-uma-calculadora-polonesa.;calcular-expressões.;",
  "rows": [
    {
      "cells": [
        "operações",
        "resultado"
      ],
      "line": 12,
      "id": "contas-com-a-notação-de-uma-calculadora-polonesa.;calcular-expressões.;;1"
    },
    {
      "cells": [
        "5 1 2 + 4 * + 3 -",
        "14.0"
      ],
      "line": 13,
      "id": "contas-com-a-notação-de-uma-calculadora-polonesa.;calcular-expressões.;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 13,
  "name": "Calcular expressões.",
  "description": "",
  "id": "contas-com-a-notação-de-uma-calculadora-polonesa.;calcular-expressões.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo uma sequencia de 5 1 2 + 4 * + 3 - a serem feitas",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o 14.0 deverá ser exibido para o usuário.",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "5 1 2 + 4 * + 3 -",
      "offset": 28
    }
  ],
  "location": "CalculadoraSteps.queReceboUmaSequenciaDeASeremFeitas(String)"
});
formatter.result({
  "duration": 2218349,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.realizoOCálculo()"
});
formatter.result({
  "duration": 854404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.0",
      "offset": 2
    }
  ],
  "location": "CalculadoraSteps.oDeveráSerExibidoParaOUsuário(String)"
});
formatter.result({
  "duration": 222367,
  "status": "passed"
});
formatter.uri("features/imposto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Calculo do imposto de renda de uma pessoa fisica.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de \u003cvalor_bruto\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser \u003caliquota\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado \u003cimposto\u003e",
  "keyword": "E "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;",
  "rows": [
    {
      "cells": [
        "valor_bruto",
        "aliquota",
        "imposto"
      ],
      "line": 12,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;1"
    },
    {
      "cells": [
        "1710.78",
        "0",
        "0"
      ],
      "line": 13,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;2"
    },
    {
      "cells": [
        "1710.79",
        "7.5",
        "128.31"
      ],
      "line": 14,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;3"
    },
    {
      "cells": [
        "1800.79",
        "7.5",
        "135.06"
      ],
      "line": 15,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;4"
    },
    {
      "cells": [
        "2563.92",
        "15",
        "384.59"
      ],
      "line": 16,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;5"
    },
    {
      "cells": [
        "3418.60",
        "22.5",
        "769.19"
      ],
      "line": 17,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;6"
    },
    {
      "cells": [
        "4271.60",
        "27.5",
        "1174.69"
      ],
      "line": 18,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 13,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de 1710.78",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado 0",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "1710.78",
      "offset": 39
    }
  ],
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(String)"
});
formatter.result({
  "duration": 249110,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 57565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(String)"
});
formatter.result({
  "duration": 128454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(String)"
});
formatter.result({
  "duration": 129781,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de 1710.79",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser 7.5",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado 128.31",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "1710.79",
      "offset": 39
    }
  ],
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(String)"
});
formatter.result({
  "duration": 142324,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 62159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(String)"
});
formatter.result({
  "duration": 127984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128.31",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(String)"
});
formatter.result({
  "duration": 83865,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de 1800.79",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser 7.5",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado 135.06",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "1800.79",
      "offset": 39
    }
  ],
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(String)"
});
formatter.result({
  "duration": 163891,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 40712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(String)"
});
formatter.result({
  "duration": 88967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "135.06",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(String)"
});
formatter.result({
  "duration": 93565,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de 2563.92",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser 15",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado 384.59",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2563.92",
      "offset": 39
    }
  ],
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(String)"
});
formatter.result({
  "duration": 151745,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 50484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(String)"
});
formatter.result({
  "duration": 93055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "384.59",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(String)"
});
formatter.result({
  "duration": 134026,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de 3418.60",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser 22.5",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado 769.19",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "3418.60",
      "offset": 39
    }
  ],
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(String)"
});
formatter.result({
  "duration": 132431,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 55052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(String)"
});
formatter.result({
  "duration": 101347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "769.19",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(String)"
});
formatter.result({
  "duration": 209828,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Testar se o imposto está sendo calculado corretamente de acordo com a faixa salarial.",
  "description": "",
  "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo o salário bruto no valor de 4271.60",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "realizo o cálculo do imposto",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o percentual da aliquota deverá ser 27.5",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 8,
  "name": "o valor do imposto caculado 1174.69",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "4271.60",
      "offset": 39
    }
  ],
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(String)"
});
formatter.result({
  "duration": 124667,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 60284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(String)"
});
formatter.result({
  "duration": 83615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1174.69",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(String)"
});
formatter.result({
  "duration": 99089,
  "status": "passed"
});
});