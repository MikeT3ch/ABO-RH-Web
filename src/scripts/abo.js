const $selectGroup = document.querySelector("#groups");
const $selectRH = document.querySelector("#rh");
var results1 = document.getElementById('results1');
var results2 = document.getElementById('results2')

const button = document.querySelector('#submit');
button.addEventListener('click', () => {
	var index = $selectGroup.selectedIndex;
	var selectItemValue = $selectGroup.options[index].value;
	var lePuedo = lePuedoDonar(selectItemValue);
	var mePueden = mePuedeDonar(selectItemValue);
	results2.textContent = lePuedo;
	results1.textContent = mePueden;
})

function lePuedoDonar(myGroup) {
	var groups;
	const groupMap = new Map();
	groupMap.set('A', ['A', 'AB']);
	groupMap.set('B', ['B', 'AB']);
	groupMap.set('AB', ['AB']);
	groupMap.set('O', ['A', 'B', 'AB', 'O']);
	groups = groupMap.get(myGroup);
	return groups;
}

function mePuedeDonar(myGroup) {
	var groups;
	const groupMap = new Map();
	groupMap.set('A', ['A', 'O']);
	groupMap.set('B', ['B', 'O']);
	groupMap.set('AB', ['A', 'B', 'AB', 'O']);
	groupMap.set('O', ['O']);
	groups = groupMap.get(myGroup);
	return groups;
}
