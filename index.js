"use strict";
exports.__esModule = true;
var autoCiudad_1 = require("./class/autoCiudad");
var autoDeportivo_1 = require("./class/autoDeportivo");
var camioneta_1 = require("./class/camioneta");
var fiat = new autoCiudad_1.AutoCiudad();
var porsche = new autoDeportivo_1.AutoDeportivo();
var hiluxSw4 = new camioneta_1.Camioneta();
console.log(fiat, porsche, hiluxSw4);
