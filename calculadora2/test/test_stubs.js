var pruebaArea = require('../src/js/area.js');
var pruebaVolumen = require('../src/js/volumen.js');
var sinon = require('sinon');
var assert = require('assert');

/**
 * ############################### STUBS ######################################
 * Los stubs son funciones dobles. Estas nos permiten varias cosas:
 * 1. Controlar el comportamiento de una función para forcar al test seguir
 * un camino específico. Por ejemplo si queremos alcanzar un error específico
 *
 * 2. Cuando se quiere prevenir a un método específico de ser llamado (porque
 * desencadena un comportamiento no deseaado, por ejemplo que se dedica a
 * lanzar peticiones XMLHttpRequest)
 *
 * Más info: http://sinonjs.org/docs/#stubs-api
 */
describe('@@@@@ Testing básico utilizando stubs @@@@@\n', function() {

  describe('@areaCuadrado', function() {
    it('Stub con \'returns\'', function() {
      //given
      var stub = sinon.stub(pruebaArea, 'areaCuadrado');
      //when
      stub.withArgs(3).returns(9);
      stub.withArgs(5).returns(25);
      //then
      assert.equal(27, pruebaVolumen.volumenCubo(3));
      assert.equal(125, pruebaVolumen.volumenCubo(5));
      //Restaura el comportamiento normal del método 'stubeado'
      stub.restore();
    });

    it('Stub con una nueva función', function() {
      var stub = sinon.stub(pruebaArea, 'areaCuadrado', function() {
        return 9;
      });
      assert.equal(27, pruebaVolumen.volumenCubo(3));
      stub.restore();
    });

    it('Stub con onCall', function() {
      var stub = sinon.stub(pruebaArea, 'areaCuadrado');
      stub.onCall(0).returns(9);
      stub.onCall(1).returns(25);
      assert.equal(27, pruebaVolumen.volumenCubo(3));
      assert.equal(125, pruebaVolumen.volumenCubo(5));
      stub.restore();
    });

    it('Stub con throws', function() {
      var stub = sinon.stub(pruebaArea, 'areaCuadrado');
      stub.throws('TypeError');
      assert.throws(pruebaVolumen.volumenCubo, 'TypeError');
      stub.restore();
    });
  });

  describe('@areaCirculo', function() {
    it('Stub con \'returns\'', function() {
      var stub = sinon.stub(pruebaArea, 'areaCirculo');
      stub.withArgs(4).returns(10);
      assert.equal(53.2, pruebaVolumen.volumenEsfera(4));
      stub.restore();
    });

    it('Stub con una nueva función', function() {
      var stub = sinon.stub(pruebaArea, 'areaCirculo', function() {
        return 10;
      });
      assert.equal(53.2, pruebaVolumen.volumenEsfera(4));
      stub.restore();
    });
  });
});
