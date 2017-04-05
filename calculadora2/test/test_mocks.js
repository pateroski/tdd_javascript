var area = require('../src/js/area.js');
var volumen = require('../src/js/volumen.js');

var sinon = require('sinon');
var assert = require('assert');

describe('@@@@@ Testing básico utilizando mocks @@@@@\n', function() {

  describe('@areaCuadrado', function() {
    it('volumenCubo() calls', function() {
      var mock = sinon.mock(area);
      var expectation = mock.expects('areaCuadrado');

      expectation.once().withArgs(3);
      expectation.withArgs(3).returns(9);
      volumen.volumenCubo(3);
      mock.verify();
      mock.restore();
    });

    it('volumenEsfera() calls', function() {
      var mock = sinon.mock(area);
      var expectation = mock.expects('areaCirculo');
      expectation.once().withArgs(4);
      expectation.withArgs(4).returns(50.24);
      volumen.volumenEsfera(4);
      mock.verify();
      mock.restore();
    });
  });
});
