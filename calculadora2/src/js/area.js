var areaModule = (function() {
  var areaCuadrado = function(lado) {
    return lado * lado;
  };

  var areaCirculo = function(radio) {
    return Math.PI.toFixed(2) * radio * radio;
  };

  return {
    areaCuadrado: areaCuadrado,
    areaCirculo: areaCirculo
  };
})();

module.exports = areaModule;
