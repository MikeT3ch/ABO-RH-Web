function calcular() {
  const
    $col = document.querySelector('#colt'),
    $hdl = document.querySelector('#hdl'),
    $trig = document.querySelector('#trig');
  var hdlCheck = document.getElementById('hdlChk');
  var isChecked = hdlCheck.checked;

  var tmpCol = $col.value.replace(/[^\d\.\-]/g, ".");
  var tmpHdl = $hdl.value.replace(/[^\d\.\-]/g, ".");
  var tmpTrig = $trig.value.replace(/[^\d\.\-]/g, ".");


  var col = parseFloat(tmpCol);
  var hdl = parseFloat(tmpHdl);
  var trig = parseFloat(tmpTrig);
  var vldl, ldl;

  if (isChecked) {
    hdl = calcularHdl(col);
    hdl = +hdl.toFixed(2);
    document.getElementById('hdl').value = hdl;
  }

  if (!isNaN(col) && !isNaN(hdl) && !isNaN(trig)) {

    // resultado = +resultado.toFixed(5);

    vldl = calcularVldl(trig);
    ldl = calcularLdl(hdl, vldl, col);

    document.getElementById('resultado_ldl').innerText = ldl;
    document.getElementById('resultado_vldl').innerText = vldl;
  } else {
    document.getElementById('resultado_ldl').innerText = 'Ingrese los valores';
    document.getElementById('resultado_vldl').innerText = 'Ingrese los valores';
  }
}
function calcularHdl(col) {
  var hdl;
  if (col <= 160 && col > 0) {
    hdl = col / 3;
  } else if (col > 160 && col < 200) {
    hdl = col / 4;
  } else if (col > 200) {
    hdl = col / 5;
  } else {
    hdl = 0;
  }
  return hdl;
}
function calcularLdl(hdl, vldl, col) {
  var ldl = col - (vldl + hdl);
  return ldl;
}
function calcularVldl(trig) {
  var vldl = trig / 5;
  return vldl;
}

function limpiar() {
  const
    $col = document.querySelector('#colt'),
    $hdl = document.querySelector('#hdl'),
    $trig = document.querySelector('#trig'),
    $resultado_ldl = document.querySelector('#resultado_ldl'),
    $resultado_vldl = document.querySelector('#resultado_vldl');

  $col.value = '';
  $hdl.value = '';
  $trig.value = '';
  $resultado_ldl.innerText = '';
  $resultado_vldl.innerText = '';
}

var calcBtn = document.querySelector('#calcBtn');
calcBtn.addEventListener('click', () => {
  calcular();
})

var clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
  limpiar();
})

document.getElementById('colt').addEventListener('input', calcular);
document.getElementById('hdl').addEventListener('input', calcular);
document.getElementById('trig').addEventListener('input', calcular);

