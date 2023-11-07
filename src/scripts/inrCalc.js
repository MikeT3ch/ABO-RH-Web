function calcular() {
  const $paciente = document.querySelector('#ptp'),
  $control = document.querySelector('#ptc'),
  $isi = document.querySelector('#isi');

  var ptPaciente = parseFloat($paciente.value);
  var ptControl = parseFloat($control.value);
  var isi = parseFloat($isi.value);

  if (!isNaN(ptPaciente) && !isNaN(ptControl) && !isNaN(isi)) {
    var r1 = dividirPT(ptPaciente, ptControl);
    var resultado = elevacion(r1, isi);
    resultado = +resultado.toFixed(5);

    document.getElementById('resultado').innerText = resultado;
  } else {
    document.getElementById('resultado').innerText = '';
  }
}
function elevacion(division, isi) {
  var elevado = Math.pow(division, isi);
  return elevado;
}
function dividirPT(ptp, ptc) {
  var division = ptp / ptc;
  return division;
}

function limpiar() {
  const $paciente = document.querySelector('#ptp'),
  $control = document.querySelector('#ptc'),
  $isi = document.querySelector('#isi'),
  $resultado = document.querySelector('#resultado');

  $paciente.value ='';
  $control.value = '';
  $isi.value = '';
  $resultado.innerText = '';
}

var calcBtn = document.querySelector('#calcBtn');
calcBtn.addEventListener('click', () => {
  calcular();
})

var clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
  limpiar();
})

document.getElementById('ptp').addEventListener('input', calcular);
document.getElementById('ptc').addEventListener('input', calcular);
document.getElementById('isi').addEventListener('input', calcular);

