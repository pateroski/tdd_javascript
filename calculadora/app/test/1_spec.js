/**
 * Tests iniciales con colaboradores reales
 * Framework: jasmine
 */

// Fase 1: Configuración (setup)
var area = new Area();
var volumen = new Volumen();

/**
  Describe: permite describir una suite de tests. Hace referencia al  componente o a una funcionalidad completa que estemos utilizando. Se permite realizar suites anidadas

  it: Define un test específico, nos permite indicar qué funcionalidad parcial estamos comprobando

  expect: cada una de las partes a probar en un determinado test. Un test puede contener cualquier número necesario de expect.

  Matchers: permiten implementar una comparación booleana entre el valor actual y el valor esperado, y además informan sobre el resultado esperado.

  https://jasmine.github.io/2.3/introduction.html
**/

//Suites de tests
describe("Test 0: Comprueba si testea las funciones:\n", function() {
  //Test 1
  it("Debe comprobar si calcula areaCuadrado:", function() {
    // Fase 2 (ejercitado) y Fase 3 (verificado)
    expect(area.areaCuadrado(2)).toBe(4);
  });
  it("Debe comprobar si calcula areaCirculo:", function() {
    expect(area.areaCirculo(2)).toBe(12.56);
  });
  it("Debe comprobar si calcula volumenCuadrado:", function() {
    expect(volumen.volumenCuadrado(2, area)).toBe(8);
  });
  it("Debe comprobar si calcula areaCirculo:\n", function() {
    expect(volumen.volumenCirculo(3, area)).toBe(112.7574);
  });
});
