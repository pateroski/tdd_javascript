var area = require('../src/js/area.js');
var volume = require('../src/js/volumen.js');
var assert = require('chai').assert;
var sinon = require('sinon');

describe('@@@@@ STUBS BY HAND @@@@@\n', function() {

  describe('@areaCirculo:', function() {

    it('should return 16 when the value 4:', function() {
      var result = area.areaCuadrado(4);
      assert.equal(result, 16);
    });

    it('should return 4 when the value 2:', function() {
      var result = area.areaCuadrado(2);
      assert.equal(result, 4);
    });
  });

  describe('@areaCuadrado', function() {

    it('should return 50.24 when the value 3:', function() {
      var result = area.areaCirculo(4);
      assert.equal(result, 50.24);
    });

    it('should return 3.14 when the value 1:', function() {
      var result = area.areaCirculo(1);
      assert.equal(result, 3.14);
    });
  });
});

describe('@@@@@ STUBS BY SINON @@@@@\n', function() {

  describe('@volumenCubo', function() {

    it('should return 50 when the radio 2:', function() {
      var stub = sinon.stub(area, 'areaCuadrado');
      stub.returns(25);
      assert.equal(50, volume.volumenCubo(2));
      stub.restore();
    });

    it('should return 404 when the radio 4:', function() {
      var stub = sinon.stub(area, 'areaCuadrado');
      stub.returns(101);
      assert.equal(404, volume.volumenCubo(4));
      stub.restore();
    });
  });

  describe('@volumenEsfera', function() {

    it('should return 266 when the radio 2:', function() {
      var stub = sinon.stub(area, 'areaCirculo');
      stub.returns(100);
      assert.equal(266, volume.volumenEsfera(2));
      stub.restore();
    });

    it('should return 36 when the radio 3:', function() {
      var stub = sinon.stub(area, 'areaCirculo');
      stub.returns(12);
      assert.equal(47.88, volume.volumenEsfera(3));
      stub.restore();
    });
  });
});
