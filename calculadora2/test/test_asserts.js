var pruebaArea = require('../src/js/area.js');
var pruebaVolumen = require('../src/js/volumen.js');
// assert de Node: https://nodejs.org/api/assert.html
var assert = require('assert');

describe('@@@@@ Testing básico con assert @@@@@\n', function() {

  describe('@@ Area', function() {
    describe('@areaCuadrado', function() {
      it('comprobar el area cuadrado que de 9', function() {
        assert.equal(9, pruebaArea.areaCuadrado(3));
      });
    });

    describe('@areaCirculo', function() {
      it('comprobar el area circulo que de 12.56', function() {
        assert.equal(12.56, pruebaArea.areaCirculo(2));
      });
    });
  });

  describe('@@ Volumen', function() {
    describe('@volumenCubo', function() {
      it('comprobar el volumen cuadrado que de 216', function() {
        assert.equal(216, pruebaVolumen.volumenCubo(6));
      });
    });

    describe('@volumenEsfera', function() {
      it('comprobar el volumen circulo que de 112.7574', function() {
        assert.equal(112.7574, pruebaVolumen.volumenEsfera(3));
      });
    });
  });
});
