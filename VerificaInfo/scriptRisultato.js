
const parsedUrl = new URL(window.location.href);

let ore = parseInt(parsedUrl.searchParams.get('ore'));
let minuti = parseInt(parsedUrl.searchParams.get('minuti'));
let secondi = parseInt(parsedUrl.searchParams.get('secondi'));

let tipoDa = parsedUrl.searchParams.get('tipoDa');
let tipoA = parsedUrl.searchParams.get('tipoA');

let risultato;
let valDa;
let valA;

let datiValidi = true;

if(tipoDa === tipoA) {
	alert("Dati non validi");
	datiValidi = false;
} else if(tipoDa === 'ore' && tipoA === 'minuti') {
	risultato = ore * 60;
	valDa = ore;
} else if(tipoDa === 'ore' && tipoA === 'secondi') {
	risultato = ore * 60 * 60;
	valDa = ore;
} else if(tipoDa === 'minuti' && tipoA === 'ore') {
	risultato = minuti / 60;
	valDa = minuti;
} else if(tipoDa === 'minuti' && tipoA === 'secondi') {
	risultato = minuti * 60;
	valDa = minuti;
} else if(tipoDa === 'secondi' && tipoA === 'minuti') {
	risultato = secondi / 60;
	valDa = secondi;
} else if(tipoDa === 'secondi' && tipoA === 'ore') {
	risultato = secondi / 60 / 60;
	valDa = secondi;
}

if(datiValidi) {
	document.getElementById("valoreDa").innerHTML = valDa;
	document.getElementById("tipoDa").innerHTML = " " + tipoDa;
	document.getElementById("valoreA").innerHTML = " " + risultato;
	document.getElementById("tipoA").innerHTML = " " + tipoA;
} else {
	document.getElementById("par").innerHTML = "Dati non validi";
}
