var elem;
var pos ;
var id ;
var images;


function addclickEvents(){
	document.getElementById("load").addEventListener("click", function() {
		moveSyringe();
	},  false);
	document.getElementById("ionisation").addEventListener("click", function(){
		moveIons();
	},  false);
	document.getElementById("acceleration").addEventListener("click", function() {
		deflection();
	}   false);
	document.getElementById("").addEventListener("click", function() {
		evaluation();
	}   false);
	document.getElementById("").addEventListener("click", function() {
		
	})
	
}

var sol = ["benzene", "acetaldehyde", "ethyl"] ;

	if(sol == benzene){
		document.getElementById("benzene").style.visibility = "visible";
		

	else if(sol == acetaldehyde) {
		document.getElementById("acetaldehyde").style.visibility = "visible" ;

	}

	else if(sol == ethyl) {
		document.getElementById("ethyl").style.visibility ="visibile"; 
	}
}
// function moveSyringe() {
	
// 	// document.getElementById('demo').innerHTML = "";
// 	// document.getElementById("demo").src = 'images/step_1.png';
// 	document.getElementById('demo').innerHTML = "The sample is introduced into the vaporisation chamber which is instantly vapourised due to high vacuum and heat.";
// 		var elem = document.getElementById("syringe");   
// 		var pos = 0;
// 		var id = setInterval(frame, 5);
// 			function frame() {
// 				if (pos == 345) {
// 				    clearInterval(id);
// 				    // alert("Hello!");
// 				    // document.getElementById('demo').innerHTML = "The sample is introduced into the vaporisation chamber which is instantly vapourised due to high vacuum and heat."
// 				} 
// 				// else {
// 				//     pos++; 
// 			 //      	elem.style.left = pos + 'px'; 
// 			 //      	elem.style.left = pos + 'px'; 
// 			 //      	alert("hello!!");
// 			 //      	document.getElementById("").src = "images/molecule.png"
// 			 //      	document.getElementById("step1").style.visibility = "visible";
// 			 //    }

// 			    	// document.getElementById("molecule").style.visibility = "visible";
// 			}
// }

// function moveIons(){
// 	document.getElementById('northpole').src = "images/northpole.png"
// 	document.getElementById("demo").innerHTML = "The ions are sorted and separted by the magnetic filed according to their mass/ charge ratio.";
// }

// function molecule(){
// 	// document.getElementById("molecule").style.WebkitAnimationIterationCount = "infinite";  // Code for Chrome, Safari, and Opera
//     document.getElementById("molecule").style.animationIterationCount = "infinite";

// }

// function acceleration(){
// 	var acceleration = "images/moving_molecules.png";
// 	document.getElementById("injector").src = "acceleration";		
// }