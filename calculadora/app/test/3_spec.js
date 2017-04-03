/**
 * Test con objetos dummy (que en este caso se comporta como un stub)
 * Framework: jasmine
 */
var areaMock = {
  areaCuadrado: function(lado) {
    return 4;
  },

  areaCirculo: function(radio) {
    //radio = 3
    return 28.26;
  }
};

var volumeMock = new Volumen();

describe("Test 4: probando el mock para volumenCuadrado y volumenCirculo:\n",
  function() {
    it("Mockeando areaCuadrado(), calculando volumenCuadrado:", function() {
      expect(volumeMock.volumenCuadrado(2, areaMock)).toBe(8);
    });

    it("Mockeando areaCirculo(), calculando volumenCirculo:", function() {
      expect(volumeMock.volumenCirculo(3, areaMock)).toBe(112.7574);
    });
  });
