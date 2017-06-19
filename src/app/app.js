angular
  .module('app')
  .component('app', {
    templateUrl: 'app/template.html',
    controllerAs: 'main',
    controller($http, jmespath, moment, _) {

     // Reference $HTTP: https://www.w3schools.com/angular/angular_http.asp
      // Reference NVD3: http://krispo.github.io/angular-nvd3/#/quickstart

      this.hello = 'Histórico de población';
      this.greetings = "Comarca de Calatayud";

      this.callback = function() { }

    //this.json = require("C:/Users/Dan/Desktop/master/AAEspecializacion/Visualizacion/dashboard/src/HombresCalatayud.json");
      
    this.chart1 = {
        data: {
          id:1
        },
        options:{}
      }

      this.chart1.options = {
        chart: {
          type: 'multiBarHorizontalChart',
          height: 450,
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
          showControls: true,
          showValues: true,
          duration: 500,
          xAxis: {
            showMaxMin: false
          },
          yAxis: {
            axisLabel: 'Values',
            tickFormat: function(d){
              return d3.format(',.2f')(d);
            }
          }
        }
      };
        
//      $http.get("http://localhost:3001/data/chart1")
//        .then((response) => {
//          debugger
//          this.chart1.data = response.data
//        });
        
        this.chart1.data = [
          {
            "key": "Hombres",
            "color": "#d62728",
            //"values": require('C:/Users/Dan/Desktop/master/AAEspecializacion/Visualizacion/dashboard/src/HombresCalatayud.json')
              "values":  [
              {
                "label" : "1998" ,
                "value" : 19413
              } ,
              {
                "label" : "1999" ,
                "value" : 19740
              } ,
              {
                "label" : "2000" ,
                "value" : 19879
              } ,
              {
                "label" : "2001" ,
                "value" : 20038
              } ,
              {
                "label" : "2002" ,
                "value" : 20506
              } ,
              {
                "label" : "2003" ,
                "value" : 20547
              } ,
              {
                "label" : "2004" ,
                "value" : 20825
              } ,
              {
                "label" : "2005" ,
                "value" : 20419
              } ,
              {
                "label" : "2006" ,
                "value" : 20419
              } ,
              {
                "label" : "2007" ,
                "value" : 21056
              } ,
              {
                "label" : "2008" ,
                "value" : 21594
              } ,
              {
                "label" : "2009" ,
                "value" : 21590
              } ,
              {
                "label" : "2010" ,
                "value" : 21442
              } ,
              {
                "label" : "2011" ,
                "value" : 20911
              } ,
              {
                "label" : "2012" ,
                "value" : 20970
              } ,
              {
                "label" : "2013" ,
                "value" : 20737
              } ,
              {
                "label" : "2014" ,
                "value" : 20357
              }]
              
          },
          {
            "key": "Mujeres",
            "color": "#1f77b4",
            //"values": require('C:/Users/Dan/Desktop/master/AAEspecializacion/Visualizacion/dashboard/src/MujeresCalatayud.json')
              "values": [
              {
                "label" : "1998" ,
                "value" : -19754
              } ,
              {
                "label" : "1999" ,
                "value" : -20111
              } ,
              {
                "label" : "2000" ,
                "value" : -20069
              } ,
              {
                "label" : "2001" ,
                "value" : -19796
              } ,
              {
                "label" : "2002" ,
                "value" : -19925
              } ,
              {
                "label" : "2003" ,
                "value" : -19978
              } ,
              {
                "label" : "2004" ,
                "value" : -20017
              } ,
              {
                "label" : "2005" ,
                "value" : -20202
              } ,
              {
                "label" : "2006" ,
                "value" : -19908
              } ,
              {
                "label" : "2007" ,
                "value" : -20300
              } ,
              {
                "label" : "2008" ,
                "value" : -20785
              } ,
              {
                "label" : "2009" ,
                "value" : -20729
              } ,
              {
                "label" : "2010" ,
                "value" : -20571
              } ,
              {
                "label" : "2011" ,
                "value" : -20102
              } ,
              {
                "label" : "2012" ,
                "value" : -19929
              } ,
              {
                "label" : "2013" ,
                "value" : -19596
              } ,
              {
                "label" : "2014" ,
                "value" : -19230
              }]
          }
        ]

    }
  });
