$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ar.feature");
formatter.feature({
  "line": 1,
  "name": "Controlar a temparatura interna da sala de aula.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "os valores dos sensores X, Y, Z respectivamente \u003cvalorX\u003e,\u003cvalorY\u003e,\u003cvalorZ\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "o ar condicionado retorna o valor da \u003ctemperatura\u003e ambiente",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
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
      "line": 9,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;1"
    },
    {
      "cells": [
        "20",
        "20",
        "20",
        "20"
      ],
      "line": 10,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;2"
    },
    {
      "cells": [
        "30",
        "30",
        "30",
        "30"
      ],
      "line": 11,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "os valores dos sensores X, Y, Z respectivamente 20,20,20",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "o ar condicionado retorna o valor da 20 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
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
  "location": "ArSteps.os_valores_dos_sensores_X_Y_Z_respectivamente(int,int,int)"
});
formatter.result({
  "duration": 152417754,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 60271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 37
    }
  ],
  "location": "ArSteps.o_ar_condicionado_retorna_o_valor_da_ambiente(int)"
});
formatter.result({
  "duration": 1971102,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-positivas;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "os valores dos sensores X, Y, Z respectivamente 30,30,30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "o ar condicionado retorna o valor da 30 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
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
  "location": "ArSteps.os_valores_dos_sensores_X_Y_Z_respectivamente(int,int,int)"
});
formatter.result({
  "duration": 255302,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 28751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 37
    }
  ],
  "location": "ArSteps.o_ar_condicionado_retorna_o_valor_da_ambiente(int)"
});
formatter.result({
  "duration": 109095,
  "status": "passed"
});
formatter.examples({
  "line": 13,
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
      "line": 14,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;1"
    },
    {
      "cells": [
        "-1",
        "-1",
        "-1",
        "-1"
      ],
      "line": 15,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;2"
    },
    {
      "cells": [
        "-5",
        "-5",
        "-5",
        "-5"
      ],
      "line": 16,
      "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "os valores dos sensores X, Y, Z respectivamente -1,-1,-1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "o ar condicionado retorna o valor da -1 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
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
  "location": "ArSteps.os_valores_dos_sensores_X_Y_Z_respectivamente(int,int,int)"
});
formatter.result({
  "duration": 194695,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 33125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 37
    }
  ],
  "location": "ArSteps.o_ar_condicionado_retorna_o_valor_da_ambiente(int)"
});
formatter.result({
  "duration": 109486,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Calcular a temperatura ambiente externa.",
  "description": "",
  "id": "controlar-a-temparatura-interna-da-sala-de-aula.;calcular-a-temperatura-ambiente-externa.;temperaturas-negativas;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "os valores dos sensores X, Y, Z respectivamente -5,-5,-5",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "realizo a media dos valores de cada sensor",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "o ar condicionado retorna o valor da -5 ambiente",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
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
  "location": "ArSteps.os_valores_dos_sensores_X_Y_Z_respectivamente(int,int,int)"
});
formatter.result({
  "duration": 197705,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 36584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-5",
      "offset": 37
    }
  ],
  "location": "ArSteps.o_ar_condicionado_retorna_o_valor_da_ambiente(int)"
});
formatter.result({
  "duration": 115625,
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
        "1283.09"
      ],
      "line": 14,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;3"
    },
    {
      "cells": [
        "2563.92",
        "15",
        "384.58"
      ],
      "line": 15,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;4"
    },
    {
      "cells": [
        "3418.60",
        "22.5",
        "769.18"
      ],
      "line": 16,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;5"
    },
    {
      "cells": [
        "4271.60",
        "27.5",
        "1174.69"
      ],
      "line": 17,
      "id": "calculo-do-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-o-imposto-está-sendo-calculado-corretamente-de-acordo-com-a-faixa-salarial.;;6"
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
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(double)"
});
formatter.result({
  "duration": 5105433,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 1860517,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.realizoOCálculoDoImposto(ImpostoSteps.java:27)\n\tat ✽.Quando realizo o cálculo do imposto(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(int)"
});
formatter.result({
  "status": "skipped"
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
  "name": "o valor do imposto caculado 1283.09",
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
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(double)"
});
formatter.result({
  "duration": 140906,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 239040,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.realizoOCálculoDoImposto(ImpostoSteps.java:27)\n\tat ✽.Quando realizo o cálculo do imposto(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "7.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1283.09",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(int)"
});
formatter.result({
  "status": "skipped"
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
  "name": "o valor do imposto caculado 384.58",
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
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(double)"
});
formatter.result({
  "duration": 168277,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 251905,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.realizoOCálculoDoImposto(ImpostoSteps.java:27)\n\tat ✽.Quando realizo o cálculo do imposto(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "384.58",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(int)"
});
formatter.result({
  "status": "skipped"
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
  "name": "o valor do imposto caculado 769.18",
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
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(double)"
});
formatter.result({
  "duration": 180780,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 297273,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.realizoOCálculoDoImposto(ImpostoSteps.java:27)\n\tat ✽.Quando realizo o cálculo do imposto(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "22.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "769.18",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(int)"
});
formatter.result({
  "status": "skipped"
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
  "location": "ImpostoSteps.queReceboOSalárioBrutoNoValorDe(double)"
});
formatter.result({
  "duration": 136761,
  "status": "passed"
});
formatter.match({
  "location": "ImpostoSteps.realizoOCálculoDoImposto()"
});
formatter.result({
  "duration": 243647,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.realizoOCálculoDoImposto(ImpostoSteps.java:27)\n\tat ✽.Quando realizo o cálculo do imposto(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "27.5",
      "offset": 36
    }
  ],
  "location": "ImpostoSteps.oPercentualDaAliquotaDeveráSer(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1174.69",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.oValorDoImpostoCaculado(int)"
});
formatter.result({
  "status": "skipped"
});
});