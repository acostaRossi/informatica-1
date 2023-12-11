const container = document.querySelector(".data-container"); 

// function to generate bars 
function generatebars(num = 20) { 

	let values = [];
	
	//for loop to generate 20 bars 
	for (let i = 0; i < num; i += 1) {

		// To generate random values from 1 to 100 
		let value = Math.floor(Math.random() * 100) + 10;

		while(values.indexOf(value) >= 0) {

			value = Math.floor(Math.random() * 100) + 10; 
		}

		values.push(value);
	}

	//for loop to generate 20 bars 
	for (let i = 0; i < values.length; i += 1) {

		let value = values[i];
		
		// To create element "div" 
		const bar = document.createElement("div"); 

		// To add class "bar" to "div" 
		bar.classList.add("bar"); 

		// Provide height to the bar 
		bar.style.height = `${value * 3}px`; 

		// Translate the bar towards positive X axis 
		bar.style.transform = `translateX(${i * 30}px)`; 
		
		// To create element "label" 
		const barLabel = document.createElement("label"); 

		// To add class "bar_id" to "label" 
		barLabel.classList.add("bar_id"); 

		// Assign value to "label" 
		barLabel.innerHTML = value; 
		
		// Append "Label" to "div" 
		bar.appendChild(barLabel); 

		// Append "div" to "data-container div" 
		container.appendChild(bar); 
	}
}

const skyBlue = "rgb(24, 190, 255)";
const lightGreen = "rgb(49, 226, 13)";

	// asynchronous function to perform "Selection Sort" 
async function SelectionSort(delay = 300) {

	disable();

	let bars = document.querySelectorAll(".bar");

	// Assign 0 to min_idx 
	var min_idx = 0; 
	for (var i = 0; i < bars.length; i += 1) { 

		// Assign i to min_idx 
		min_idx = i; 

		// Provide darkblue color to the ith bar 
		bars[i].style.backgroundColor = "darkblue"; 
		bars[i].style.color = "white"; 
		for (var j = i + 1; j < bars.length; j += 1) { 

			// Provide red color to the jth bar 
			bars[j].style.backgroundColor = "orange"; 
				
			// To pause the execution of code for 300 milliseconds 
			await new Promise((resolve) => 
				setTimeout(() => { 
				resolve(); 
				}, delay) 
			); 

			// To store the integer value of jth bar to var1 
			var valJ = parseInt(bars[j].childNodes[0].innerHTML); 

			// To store the integer value of (min_idx)th bar to var2 
			var valMin = parseInt(bars[min_idx].childNodes[0].innerHTML); 
			
			// Compare valJ & valMin 
			if (valJ < valMin) {

				if (min_idx !== i) {

					// Provide skyblue color to the (min-idx)th bar 
					bars[min_idx].style.backgroundColor = skyBlue;
				}

				min_idx = j;

			} else { 

				// Provide skyblue color to the jth bar 
				bars[j].style.backgroundColor = skyBlue; 
			}
		} 

		// To swap ith and (min_idx)th bar 
		var temp1 = bars[min_idx].style.height; 
		var temp2 = bars[min_idx].childNodes[0].innerText; 
		bars[min_idx].style.height = bars[i].style.height; 
		bars[i].style.height = temp1; 
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
		bars[i].childNodes[0].innerText = temp2;

		// To pause the execution of code for 300 milliseconds 
		await new Promise((resolve) => 
			setTimeout(() => { 
				resolve(); 
		}, delay));

		// Provide skyblue color to the (min-idx)th bar 
		bars[min_idx].style.backgroundColor = skyBlue; 

		// Provide lightgreen color to the ith bar 
		bars[i].style.backgroundColor = lightGreen; 
	} 

	// To enable the button "Generate New Array" after final(sorted) 
	document.getElementById("Button1").disabled = false; 
	document.getElementById("Button1").style.backgroundColor = "#6f459e"; 

	// To enable the button "Selection Sort" after final(sorted) 
	document.getElementById("Button2").disabled = false; 
	document.getElementById("Button2").style.backgroundColor = "#6f459e"; 
}

// Call "generatebars" function 
generatebars(10);

// function to generate new random array 
function generate() {
	window.location.reload(); 
} 

// function to disable the button 
function disable() {
	// To disable the button "Generate New Array" 
	document.getElementById("Button1").disabled = true; 
	document.getElementById("Button1").style.backgroundColor = "#d8b6ff"; 

	// To disable the button "Selection Sort" 
	document.getElementById("Button2").disabled = true; 
	document.getElementById("Button2").style.backgroundColor = "#d8b6ff"; 
}