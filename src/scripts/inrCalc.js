const ptPaciente = parseFloat(document.querySelector('#ptp').value);
const ptControl = parseFloat (document.querySelector('#ptc').value);
const isi = parseFloat(document.querySelector('#isi').value);
const resultado = document.querySelector('#resultado');

const calcBtn = document.querySelector('#calcular');
calcBtn.addEventListener('click', () => {
	calcular();
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
	limpiar();
})

function calcular() {
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
	ptPaciente = '';
	ptControl = '';
	isi = '';
	resultado.innerText = '';
}
document.getElementById('ptp').addEventListener('input', calcular);
document.getElementById('ptc').addEventListener('input', calcular);
document.getElementById('isi').addEventListener('input', calcular);
