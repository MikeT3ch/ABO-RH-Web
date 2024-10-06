function calcular() {
	const $creaO = document.querySelector('#cro'),
		$creaS = document.querySelector('#crs'),
		$dil = document.querySelector('#dil'),
		$vol = document.querySelector('#vol');

	var cro = parseFloat($creaO.value);
	var crs = parseFloat($creaS.value);
	var dil = parseFloat($dil.value);
	var vol = parseFloat($vol.value);

	if (!isNaN(cro) && !isNaN(crs) && !isNaN(dil) && !isNaN(vol)) {
		// TODO: Implementacion de formula de creatinina
		var f1, f2, min = 1440;
		f1 = ((cro * dil) / crs)
		f2 = vol / min
		var resultado = f1 * f2;
		resultado = +resultado.toFixed(5);

		document.getElementById('resultado').innerText = resultado;
	} else {
		document.getElementById('resultado').innerText = '';
	}
}

function limpiar() {
	const $creaO = document.querySelector('#cro'),
		$creaS = document.querySelector('#crs'),
		// $dil = document.querySelector('#dil'),
		$vol = document.querySelector('#vol'),
		$resultado = document.querySelector('#resultado');

	$creaO.value = '';
	$creaS.value = '';
	$dil.value = '';
	$vol.value = '';
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

document.getElementById('cro').addEventListener('input', calcular);
document.getElementById('crs').addEventListener('input', calcular);
document.getElementById('dil').addEventListener('input', calcular);
document.getElementById('vol').addEventListener('input', calcular);

