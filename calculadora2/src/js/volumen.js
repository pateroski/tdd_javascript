var volumeModule = (function() {
  var area = require('./area.js');

  var volumenCubo = function(lado) {
    return area.areaCuadrado(lado) * lado;
  };

  var volumenEsfera = function(radio) {
    return area.areaCirculo(radio) * radio * ((4 / 3).toFixed(2));
  };

  return {
    volumenCubo: volumenCubo,
    volumenEsfera: volumenEsfera
  };
})();

module.exports = volumeModule;
