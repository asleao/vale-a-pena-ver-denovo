$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/navegacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Sistema de navegação da Empresa Foobar.",
  "description": "",
  "id": "sistema-de-navegação-da-empresa-foobar.",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verificar cidade de acordo com o ponto cardeal",
  "description": "",
  "id": "sistema-de-navegação-da-empresa-foobar.;verificar-cidade-de-acordo-com-o-ponto-cardeal",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo uma lista: \u003ccidades\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "informo o \u003cponto_cardeal\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o sistema deverá retornar a \u003ccidade\u003e que está mais próxima daquele ponto",
  "keyword": "Então "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "sistema-de-navegação-da-empresa-foobar.;verificar-cidade-de-acordo-com-o-ponto-cardeal;",
  "rows": [
    {
      "cells": [
        "cidades",
        "ponto_cardeal",
        "cidade"
      ],
      "line": 11,
      "id": "sistema-de-navegação-da-empresa-foobar.;verificar-cidade-de-acordo-com-o-ponto-cardeal;;1"
    },
    {
      "cells": [
        "Vitoria, Serra, Colatina, Pedro Canario",
        "norte",
        "Pedro Canario"
      ],
      "line": 12,
      "id": "sistema-de-navegação-da-empresa-foobar.;verificar-cidade-de-acordo-com-o-ponto-cardeal;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 12,
  "name": "Verificar cidade de acordo com o ponto cardeal",
  "description": "",
  "id": "sistema-de-navegação-da-empresa-foobar.;verificar-cidade-de-acordo-com-o-ponto-cardeal;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 5,
  "name": "que recebo uma lista: Vitoria, Serra, Colatina, Pedro Canario",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "informo o norte",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "o sistema deverá retornar a Pedro Canario que está mais próxima daquele ponto",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Navegacao.informoONorte()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});