function Volumen () {
  this.volumenCuadrado = function (lado, oArea) {
    return oArea.areaCuadrado(lado) * lado;
  };

  this.volumenCirculo = function (radio, oArea) {
    return oArea.areaCirculo(radio) * radio * ((4 / 3).toFixed(2));
  };
}

var area = new Area();
var vol = new Volumen();

function alertarVolumenCuadrado() {
  $('#resultCuadrado').text("El volumen es: " +vol.volumenCuadrado($('#lado').val(), area));
}

function alertarVolumenCirculo() {
  $('#resultCirculo').text("El volumen es: " +vol.volumenCirculo($('#radio').val(), area));
}
