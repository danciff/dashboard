/* global moment:false */
/* global jmespath:false */
/* global _:false */

angular
  .module('app', ['ui.router', 'ui.bootstrap', 'nvd3'])
  .constant('moment', moment)
  .constant('jmespath', jmespath)
  .constant('_', _);

var express = require('express');
var cors = require('cors');

var app = express();

//var jsonh = require('./HombresCalatayud.json'); 
var jsonh = require('C:/Users/Dan/Desktop/master/AAEspecializacion/Visualizacion/dashboard/src/HombresCalatayud.json'); 
var jsonm = require('C:/Users/Dan/Desktop/master/AAEspecializacion/Visualizacion/dashboard/src/MujeresCalatayud.json'); 

app.get('/data/chart1', function (req,res) {
    res.send(
    [
          {
            "key": "Series1",
            "color": "#d62728",
            "values": jsonh
          },
          {
            "key": "Series2",
            "color": "#1f77b4",
            "values": jsonm
          }
        ]
    )
} 
)


