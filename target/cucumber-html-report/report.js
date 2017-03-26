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
  "duration": 212159926,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 61140,
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
  "duration": 9099409,
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
  "duration": 235033,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 32134,
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
  "duration": 146721,
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
  "duration": 244917,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 35879,
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
  "duration": 720724,
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
  "duration": 217444,
  "status": "passed"
});
formatter.match({
  "location": "ArSteps.realizoAMediaDosValoresDeCadaSensor()"
});
formatter.result({
  "duration": 42182,
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
  "duration": 114696,
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
  "duration": 118105,
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
  "duration": 316311,
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
  "duration": 4438513,
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
  "duration": 182594,
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
  "duration": 221712,
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
  "duration": 164882,
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
  "duration": 145150,
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
  "duration": 193595,
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
  "duration": 156835,
  "status": "passed"
});
});