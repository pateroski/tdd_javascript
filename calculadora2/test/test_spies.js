var area = require('../src/js/area.js');
var volumen = require('../src/js/volumen.js');
var sinon = require('sinon');
var assert = require('assert');

/**
 * ################################# SPIES #####################################
 * Un spy es una función que graba los argumentos, el valor devuelto y el
 * valor de 'this' para todas sus llamadas. Un spy puede ser una función
 * anónima o puede envolver a una función existente, es decir, ser una función
 * doble.
 *
 * Suelen ser útiles para probar los callbacks como para vigilar el
 * comportamiento de ciertos métodos/funciones durante la ejecución del test
 *
 * Además se pueden crear spies que vigilen métodos/funciones como llamadas
 * específicas de éstas
 *
 * Mas info: http://sinonjs.org/docs/#spies
 */
describe('@@@@@ Testing con Spies @@@@@\n', function() {
  describe('@areaCuadrado:', function() {
    describe('Utilizando spy', function() {
      it('Se llama una vez, con parámetro 2 y debe ser igual a 4',
        function() {
          //given
          var spy = sinon.spy(area, 'areaCuadrado');
          //when
          area.areaCuadrado(2);
          //then
          assert(spy.callCount === 1);
          assert(spy.calledOn(area));
          assert(spy.calledWith(2));
          assert(spy.withArgs(2).calledOnce);
          assert(spy.neverCalledWith(3));
          assert(spy.returnValues[0] === 4);
          spy.restore();
      });
    });
    describe('Utilizando spyCall', function() {
      it('La primera llamada se hace con parámetro 2 y debe devolver 4',
        function() {
          //given
          var spy = sinon.spy(area, 'areaCuadrado');
          //when
          area.areaCuadrado(2);
          //then
          var spyCall = area.areaCuadrado.getCall(0);

          assert(spyCall.calledOn(area));
          assert(spyCall.calledWith(2));
          assert(spyCall.notCalledWith(3));
          assert(spyCall.returnValue === 4);
          spy.restore();
        });
    });
  });

  describe('@areaCirculo:', function() {
    describe('Utilizando spy', function() {
      it('Se llama una vez, con parámetro 2 y debe ser igual a 12.56',
        function() {
          var spy = sinon.spy(area, 'areaCirculo');

          area.areaCirculo(2);

          assert(spy.callCount === 1);
          assert(spy.calledOn(area));
          assert(spy.calledWith(2));
          assert(spy.withArgs(2).calledOnce);
          assert(spy.neverCalledWith(3));
          assert(spy.returnValues[0] === 12.56);
          spy.restore();
        });
    });

    describe('Utilizando spyCall', function() {
      it('La primera llamada se hace con parámetro 2 y debe devolver 12.56',
        function() {
          var spy = sinon.spy(area, 'areaCirculo');
          area.areaCirculo(2);
          var spyCall = area.areaCirculo.getCall(0);

          assert(spyCall.calledOn(area));
          assert(spyCall.calledWith(2));
          assert(spyCall.notCalledWith(3));
          assert(spyCall.returnValue === 12.56);
          spy.restore();
        });
    });
  });

  describe('@volumenCubo:', function() {
    describe('Utilizando spy', function() {
      it('Se llama una vez, con parámetro 2 y debe ser igual a 8',
        function() {
          var spy = sinon.spy(volumen, 'volumenCubo');
          volumen.volumenCubo(2);

          assert(spy.callCount === 1);
          assert(spy.calledOn(volumen));
          assert(spy.calledWith(2));
          assert(spy.neverCalledWith(3));
          assert(spy.withArgs(2).calledOnce);
          assert(spy.returnValues[0] === 8);
          spy.restore();
        });
    });
    describe('Utilizando spyCall', function() {
      it('La primera llamada con parámetro 2 y debe ser igual a 8',
        function() {
          var spy = sinon.spy(volumen, 'volumenCubo');
          volumen.volumenCubo(2);
          var spyCall = volumen.volumenCubo.getCall(0);

          assert(spyCall.calledOn(volumen));
          assert(spyCall.calledWith(2));
          assert(spyCall.notCalledWith(3));
          assert(spyCall.returnValue === 8);
          spy.restore();
        });
    });
  });

  describe('@volumenEsfera:', function() {
    describe('Utilizando spy', function() {
      it('Se llama una vez, con parámetro 2 y debe ser igual a 33.409600000000005',
        function() {
          var spy = sinon.spy(volumen, 'volumenEsfera');
          volumen.volumenEsfera(2);

          assert(spy.callCount === 1);
          assert(spy.calledOn(volumen));
          assert(spy.calledWith(2));
          assert(spy.neverCalledWith(3));
          assert(spy.withArgs(2).calledOnce);
          //Viva la aritmética de coma flotante de Javascript! :)
          assert(spy.returnValues[0] ===
            33.409600000000005);
          spy.restore();
        });
    });

    describe('Utilizando spyCall', function() {
      it('La primera llamada con parámetro 2 y debe ser igual a 33.409600000000005',
        function() {
          var spy = sinon.spy(volumen, 'volumenEsfera');
          volumen.volumenEsfera(2);
          var spyCall = volumen.volumenEsfera.getCall(0);

          assert(spyCall.calledOn(volumen));
          assert(spyCall.calledWith(2));
          assert(spyCall.notCalledWith(3));
          assert(spyCall.returnValue === 33.409600000000005);
          spy.restore();
        });
    });
  });
});
