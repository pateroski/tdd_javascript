var $ = require('jquery');
var area = require('../area.js');
var volume = require('../volumen.js');

$('#calcularAreaCuadrado').click(alertarAreaCuadrado);
$('#calcularVolumenCuadrado').click(alertarVolumenCuadrado);
$('#calcularAreaCirculo').click(alertarAreaCirculo);
$('#calcularVolumenCirculo').click(alertarVolumenCirculo);

$('#menuSquare').click(function() {
  $('#panelCircle').hide();
  $('#panelSquare').show();
  $('#menuSquare').addClass("active");
  $('#menuCircle').removeClass("active");
  $('#menuInfo').removeClass("active");

});
$('#menuCircle').click(function() {
  $('#panelSquare').hide();
  $('#panelCircle').show();
  $('#menuCircle').addClass("active");
  $('#menuSquare').removeClass("active");
  $('#menuInfo').removeClass("active");
});

function alertarAreaCuadrado() {
  $('#resultCuadrado').text("  El area es : " + area.areaCuadrado($('#lado').val()));
  resetResults('#resultCuadrado');
}

function alertarAreaCirculo() {
  $('#resultCirculo').text("  El area es : " + area.areaCirculo($('#radio').val()));
  resetResults('#resultCirculo');
}

function alertarVolumenCuadrado() {
  $('#resultCuadrado').text("  El volumen es : " + volume.volumenCubo($('#lado')
    .val(), area));
  resetResults('#resultCuadrado');
}

function alertarVolumenCirculo() {
  $('#resultCirculo').text("  El volumen es : " + volume.volumenEsfera($(
    '#radio').val(), area));
  resetResults('#resultCirculo');
}

function resetResults(clase) {
  setTimeout(function() {
    console.log("pause 2 seconds...");
    $(clase).text("");
  }, 2000);
}
