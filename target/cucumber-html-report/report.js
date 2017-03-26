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
  "duration": 173534482,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 79022,
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
  "duration": 3508830,
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
  "duration": 225867,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 36070,
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
  "duration": 139255,
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
  "duration": 227276,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 34501,
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
  "duration": 106938,
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
  "duration": 255268,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizo_a_media_dos_valores_de_cada_sensor()"
});
formatter.result({
  "duration": 28905,
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
  "duration": 103063,
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
  "name": "Calculo de imposto de renda de uma pessoa fisica.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testar se os valores de aliquota estao de acordo com o valor bruto.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "possuo o \u003cvalor_bruto\u003e e uma \u003caliquota\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "aplico o percentual da \u003caliquota\u003e no \u003cvalor_bruto\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "retorno o valor do \u003cimposto\u003e calculado",
  "keyword": "Então "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;",
  "rows": [
    {
      "cells": [
        "valor_bruto",
        "aliquota",
        "imposto"
      ],
      "line": 11,
      "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;1"
    },
    {
      "cells": [
        "1710.78",
        "0",
        "0"
      ],
      "line": 12,
      "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;2"
    },
    {
      "cells": [
        "1710.79",
        "7.5",
        "1283.09"
      ],
      "line": 13,
      "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;3"
    },
    {
      "cells": [
        "2563.92",
        "15",
        "384.58"
      ],
      "line": 14,
      "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;4"
    },
    {
      "cells": [
        "3418.60",
        "22.5",
        "769.18"
      ],
      "line": 15,
      "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;5"
    },
    {
      "cells": [
        "4271.60",
        "27.5",
        "1174.69"
      ],
      "line": 16,
      "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;6"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 12,
  "name": "Testar se os valores de aliquota estao de acordo com o valor bruto.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "possuo o 1710.78 e uma 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "aplico o percentual da 0 no 1710.78",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "retorno o valor do 0 calculado",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1710.78",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "ImpostoSteps.possuo_o_e_uma(double,double)"
});
formatter.result({
  "duration": 5161688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    },
    {
      "val": "1710.78",
      "offset": 28
    }
  ],
  "location": "ImpostoSteps.aplico_o_percentual_da_no(double,double)"
});
formatter.result({
  "duration": 1836888,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.aplico_o_percentual_da_no(ImpostoSteps.java:27)\n\tat ✽.Quando aplico o percentual da 0 no 1710.78(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "ImpostoSteps.retorno_o_valor_do_calculado(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Testar se os valores de aliquota estao de acordo com o valor bruto.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "possuo o 1710.79 e uma 7.5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "aplico o percentual da 7.5 no 1710.79",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "retorno o valor do 1283.09 calculado",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1710.79",
      "offset": 9
    },
    {
      "val": "7.5",
      "offset": 23
    }
  ],
  "location": "ImpostoSteps.possuo_o_e_uma(double,double)"
});
formatter.result({
  "duration": 197300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.5",
      "offset": 23
    },
    {
      "val": "1710.79",
      "offset": 30
    }
  ],
  "location": "ImpostoSteps.aplico_o_percentual_da_no(double,double)"
});
formatter.result({
  "duration": 411553,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.aplico_o_percentual_da_no(ImpostoSteps.java:27)\n\tat ✽.Quando aplico o percentual da 7.5 no 1710.79(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "1283.09",
      "offset": 19
    }
  ],
  "location": "ImpostoSteps.retorno_o_valor_do_calculado(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Testar se os valores de aliquota estao de acordo com o valor bruto.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "possuo o 2563.92 e uma 15",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "aplico o percentual da 15 no 2563.92",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "retorno o valor do 384.58 calculado",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "2563.92",
      "offset": 9
    },
    {
      "val": "15",
      "offset": 23
    }
  ],
  "location": "ImpostoSteps.possuo_o_e_uma(double,double)"
});
formatter.result({
  "duration": 8306021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 23
    },
    {
      "val": "2563.92",
      "offset": 29
    }
  ],
  "location": "ImpostoSteps.aplico_o_percentual_da_no(double,double)"
});
formatter.result({
  "duration": 399375,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.aplico_o_percentual_da_no(ImpostoSteps.java:27)\n\tat ✽.Quando aplico o percentual da 15 no 2563.92(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "384.58",
      "offset": 19
    }
  ],
  "location": "ImpostoSteps.retorno_o_valor_do_calculado(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Testar se os valores de aliquota estao de acordo com o valor bruto.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "possuo o 3418.60 e uma 22.5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "aplico o percentual da 22.5 no 3418.60",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "retorno o valor do 769.18 calculado",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "3418.60",
      "offset": 9
    },
    {
      "val": "22.5",
      "offset": 23
    }
  ],
  "location": "ImpostoSteps.possuo_o_e_uma(double,double)"
});
formatter.result({
  "duration": 176231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22.5",
      "offset": 23
    },
    {
      "val": "3418.60",
      "offset": 31
    }
  ],
  "location": "ImpostoSteps.aplico_o_percentual_da_no(double,double)"
});
formatter.result({
  "duration": 356731,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.aplico_o_percentual_da_no(ImpostoSteps.java:27)\n\tat ✽.Quando aplico o percentual da 22.5 no 3418.60(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "769.18",
      "offset": 19
    }
  ],
  "location": "ImpostoSteps.retorno_o_valor_do_calculado(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Testar se os valores de aliquota estao de acordo com o valor bruto.",
  "description": "",
  "id": "calculo-de-imposto-de-renda-de-uma-pessoa-fisica.;testar-se-os-valores-de-aliquota-estao-de-acordo-com-o-valor-bruto.;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "possuo o 4271.60 e uma 27.5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "aplico o percentual da 27.5 no 4271.60",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "retorno o valor do 1174.69 calculado",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "4271.60",
      "offset": 9
    },
    {
      "val": "27.5",
      "offset": 23
    }
  ],
  "location": "ImpostoSteps.possuo_o_e_uma(double,double)"
});
formatter.result({
  "duration": 185702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27.5",
      "offset": 23
    },
    {
      "val": "4271.60",
      "offset": 31
    }
  ],
  "location": "ImpostoSteps.aplico_o_percentual_da_no(double,double)"
});
formatter.result({
  "duration": 381061,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat ImpostoSteps.aplico_o_percentual_da_no(ImpostoSteps.java:27)\n\tat ✽.Quando aplico o percentual da 27.5 no 4271.60(features/imposto.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "1174.69",
      "offset": 19
    }
  ],
  "location": "ImpostoSteps.retorno_o_valor_do_calculado(double)"
});
formatter.result({
  "status": "skipped"
});
});