
let camere = [];

document.getElementById("btnInserisci").addEventListener("click", () => {

    let numeroCamera = document.getElementById("numeroCamera").value;

    numeroCamera = parseInt(numeroCamera);

    let nominativoCliente = document.getElementById("nominativoCliente").value;

    if(isNaN(numeroCamera)) {
        alert("inserisci un numero valido");
    } else if(nominativoCliente === undefined || nominativoCliente === "") {
        alert("inserisci un nominativo valido");
    } else {
        camere[numeroCamera] = nominativoCliente;
    }
});

document.getElementById("btnStampaClienti").addEventListener("click", () => {

    let elenco = "";

    for(let i = 1; i < camere.length; i++) {
        if(camere[i] !== undefined) {
            let s = "Cliente: " + camere[i];
            s += " Camera: " + i;

            elenco += s;
            elenco += "</br>";
        }
    }
    
    document.getElementById("clientiCamere").innerHTML = elenco;
});

document.getElementById("btnStampaCamereLibere").addEventListener("click", () => {

    let libere = false;

    let elenco = "";

    for(let i = 1; i < camere.length; i++) {
        if(camere[i] === undefined) {
            let s = "Camera: " + i;

            elenco += s;
            elenco += "</br>";

            libere = true;
        }
    }

    if(!libere) {
        document.getElementById("camereLibere").innerHTML = "Non ci sono camere libere.";
    } else {
       document.getElementById("camereLibere").innerHTML = elenco;
    }
});

document.getElementById("btnStampaCameraCliente").addEventListener("click", () => {

    let nomeCliente = document.getElementById("nomeCliente").value;

    if(nomeCliente === undefined || nomeCliente === "") {
        alert("Inserisci un nome valido");
    } else {
        let trovato = false;
        for(let i = 1; i < camere.length; i++) {
            if(camere[i] === nomeCliente) {
                trovato = true;
                document.getElementById("cameraCliente").innerHTML = "Camera: " + i;
            }
        }
        if(!trovato) {
            document.getElementById("cameraCliente").innerHTML = "Cliente non presente";
        }
    }
});

document.getElementById("btnInserisciClienteDaNome").addEventListener("click", () => {

    let nomeCliente = document.getElementById("nomeNuovoCliente").value;

    if(nomeCliente === undefined || nomeCliente === "") {
        alert("Inserisci un nome valido");
    } else {
        let trovata = false;

        for(let i = 1; i < camere.length; i++) {
            if(trovata === false && camere[i] === undefined) {
                camere[i] = nomeCliente;
                trovata = true;
            }
        }

        if(!trovata) {
            alert("Non ci sono camere libere");
        }
    }
});


