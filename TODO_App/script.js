
// array che contiene i task
let tasks = [];

// numerico autoincrementante (1, 2, 3, ...)
let idAutoInc = 1;

// stati task
const dafare = "dafare";
const completata = "completata";

// form per la creazione di una nuova attività
document.getElementById("newTaskForm").addEventListener("submit", (e) => {

	e.preventDefault();

	const formData = new FormData(document.getElementById("newTaskForm"));

	const titolo = formData.get("titolo");

	if(titolo !== undefined && titolo !== "") {

		let objectTask = {
			"id": idAutoInc++,
			"titolo": titolo,
			"stato": dafare,
		}

		tasks.push(objectTask);
	}

	saveData();

	drawTable();
});

function saveData() {
	localStorage.setItem("tasks", JSON.stringify(tasks));
	localStorage.setItem("idAutoInc", idAutoInc);
}

function loadData() {
	tasks = JSON.parse(localStorage.getItem("tasks"));

	if(!isNaN(localStorage.getItem("idAutoInc")))
		idAutoInc = localStorage.getItem("idAutoInc");
}

function changeTaskState(el, taskId) {

	for(let i = 0; i < tasks.length; i++) {
		if(tasks[i].id === taskId) {
			tasks[i].stato = el.value;
			break;
		}
	}

	saveData();
}

function deleteTask(taskId) {

	let elToRemove = -1;

	for(let i = 0; i < tasks.length; i++) {
		if(tasks[i].id === taskId) {
			elToRemove = i;
			break;
		}
	}

	if(elToRemove >= 0) {
		// rimozione del task dall'array
		tasks.splice(elToRemove, 1);
	}

	saveData();

	drawTable();
}

function drawTable() {

	let numberTemplate = `<td>number</td>`;

	let btnTemplate = `<td id="buttonCol">
					<button onclick='deleteTask(idTask)'>❌</button>
				</td>`;

	let selectTemplate = `
				<td id="selectCol">
					<select onclick='changeTaskState(this, idTask)'>
						<option value="${ dafare }">Da fare</option>
						<option value="${ completata }" stato>Completata</option>
					</select>
				</td>`;

	document.getElementById("tableBody").innerHTML = "";

	for(let i = 0; i < tasks.length; i++) {

		let taskTitoloEl = `<td>${ tasks[i].titolo }</td>`;

		let btnEl = btnTemplate;
		btnEl = btnEl.replace("idTask", tasks[i].id);

		let selectEl = selectTemplate;
		selectEl = selectEl.replace("idTask", tasks[i].id);
		if(tasks[i].stato === completata) {
			selectEl = selectEl.replace("stato", "selected='true'");
		}

		let numberEl = numberTemplate.replace("number", tasks[i].id);

		let htmlTableRow = `<tr>
						${ numberEl }
						${ taskTitoloEl }
						${ selectEl }
						${ btnEl }
					</tr>`;

		document.getElementById("tableBody").innerHTML += htmlTableRow;
	}
}

window.addEventListener("load", () => {

	loadData();

	drawTable();
});