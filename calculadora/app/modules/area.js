function Area () {
  this.areaCuadrado = function (lado){
      return lado * lado;
  };

  this.areaCirculo = function (radio){
       return Math.PI.toFixed(2) * radio * radio;
  };
}

var area = new Area();

function alertarAreaCuadrado(){
  $('#resultCuadrado').text("El área es: " +area.areaCuadrado($('#lado').val()));
}

function alertarAreaCirculo(){
  $('#resultCirculo').text("El área es: " +area.areaCirculo($('#radio').val()));
}
