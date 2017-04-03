/**
 * Tests con colaboradores stubs y spies (jasmine llama a todo spy)
 * Framework: jasmine
 */

/*
 * Spy que se comporta como un stub con el match '.and.returnValue'
 */
describe("Test 1: volumenCuadrado y volumenCirculo con \".and.returnValue\"\n",
  function() {

    var volumespy, areaspy, volPruebaCuadrado, volPruebaCirculo;

    /**
     * Todo el código que utilicemos en este bloque se ejecutará antes de cada
     * test
     */
    beforeEach(function() {

      volumespy = new Volumen();
      areaspy = new Area();

      spyOn(volumespy, "volumenCuadrado").and.returnValue(8);
      spyOn(volumespy, "volumenCirculo").and.returnValue(112.7574);

      volPruebaCuadrado = volumespy.volumenCuadrado(2, areaspy);
      volPruebaCirculo = volumespy.volumenCirculo(3, areaspy);
    });

    /* Prueba que se llaman y que devuelven los valores esperados */
    it("Esperemos que se llama a la función volumenCuadrado", function() {
      // Y llamamos con this.volumespy
      expect(volumespy.volumenCuadrado).toHaveBeenCalled();
    });

    it("Espera que se llame a la función volumenCuadrado", function() {
      expect(volPruebaCuadrado).toEqual(8);
    });

    it("Esperemos que se llama a la función volumenCirculo", function() {
      expect(volumespy.volumenCirculo).toHaveBeenCalled();
    });

    it("Espera que se llame a la función volumenCuadrado\n", function() {
      expect(volPruebaCirculo).toEqual(112.7574);
    });
  });

/*
 * Spy que se comporta como un stub, utilizando el matcher '.and.callFake'
 */
describe("Test 2: volumenCuadrado y volumenCirculo con \".and.callFake\"\n",
  function() {
    var areaspy, volumespy, volFakeCuadrado, volFakeCirculo;

    beforeEach(function() {
      volumespy = new Volumen();
      areaspy = new Area();

      /* Lo que sería un stub, solo que en este caso, la funcionalidad implementada es únicamente devolver un valor */
      spyOn(volumespy, "volumenCuadrado").and.callFake(function() {
        return 8;
      });
      spyOn(volumespy, "volumenCirculo").and.callFake(function() {
        return 112.7574;
      });

      volFakeCuadrado = volumespy.volumenCuadrado(2, areaspy);
      volFakeCirculo = volumespy.volumenCirculo(3, areaspy);
    });

    /* Prueba que se llaman y que la spy hace el fake de lo que devuelven
       las llamadas a los métodos reales
     */
    it("Esperemos que se llama a la función volumenCuadrado", function() {
      expect(volumespy.volumenCuadrado).toHaveBeenCalled();
    });

    it("Espera que el spy callFake devuelva el valor esperado", function() {
      expect(volFakeCuadrado).toEqual(8);
    });

    it("Esperemos que se llama a la función volumenCirculo", function() {
      expect(volumespy.volumenCirculo).toHaveBeenCalled();
    });

    it("Espera que el spy callFake devuelva el valor esperado\n", function() {
      expect(volFakeCirculo).toEqual(112.7574);
    });
  });

/**
 * Mocks (objetos spies en jasmine). El objetivo es verificar el comportamiento
 * de las funciones mockeadas. La única diferencia aquí estamos creando un
 * objeto que se comporta igual que los métodos sobre los que queremos
 * verificar el comportamiento
 */
describe("Test 3: volumenCuadrado y volumenCirculo con mocks simulados\n",
  function() {
    var mockSpyArea, mockSpyVolumen;

    beforeEach(function() {
      mockSpyArea = jasmine.createSpyObj('mockSpyArea', ['areaCuadrado',
        'areaCirculo'
      ]);
      mockSpyArea.areaCuadrado(2);
      mockSpyArea.areaCirculo(3);

      mockSpyVolumen = jasmine.createSpyObj('mockSpyVolumen', [
        'volumenCuadrado', 'volumenCirculo'
      ]);
      mockSpyVolumen.volumenCuadrado(2, mockSpyArea);
      mockSpyVolumen.volumenCirculo(3, mockSpyArea);
    });

    /**
     * MockSpyArea
     */
    it("veamos que se han creado los spies para los métodos mockSpyArea",
      function() {
        expect(mockSpyArea.areaCuadrado).toBeDefined();
        expect(mockSpyArea.areaCirculo).toBeDefined();
      });

    it("veamos que se han traceado los spies de mockSpyArea", function() {
      expect(mockSpyArea.areaCuadrado).toHaveBeenCalled();
      expect(mockSpyArea.areaCirculo).toHaveBeenCalled();
    });

    it(
      "veamos que se han llamado los spies de mockSpyArea con los parámetros",
      function() {
        expect(mockSpyArea.areaCuadrado).toHaveBeenCalledWith(2);
        expect(mockSpyArea.areaCirculo).toHaveBeenCalledWith(3);
      });

    /**
     * MockSpyVolumen
     */
    it("veamos que se han creado los spies para los métodos mockSpyVolumen",
      function() {
        expect(mockSpyVolumen.volumenCuadrado).toBeDefined();
        expect(mockSpyVolumen.volumenCirculo).toBeDefined();
      });

    it("veamos que se han traceado los spies de mockSpyVolumen", function() {
      expect(mockSpyVolumen.volumenCuadrado).toHaveBeenCalled();
      expect(mockSpyVolumen.volumenCirculo).toHaveBeenCalled();
    });

    it(
      "veamos que se han llamado los spies de mockSpyArea con los parámetros\n",
      function() {
        expect(mockSpyVolumen.volumenCuadrado).toHaveBeenCalledWith(2,
          mockSpyArea);
        expect(mockSpyVolumen.volumenCirculo).toHaveBeenCalledWith(3,
          mockSpyArea);
      });
  });
