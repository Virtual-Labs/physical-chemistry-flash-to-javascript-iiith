// var model={

//     instruction1: 'Select a sample',
//     instruction2:'Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.',
//     instruction3:'Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle',
//     instruction4:'Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.',
//     instruction5:'Click on the sample solution to make a clear solution.',
//     instruction6:'Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer.',
//     instruction7:'Click on 'start' button to start the spectrometer.',
//     instruction8:'Click on the evaluation button for spectral analysis'
// }

 
 /*This method is called when the page is loaded. *
   First function helps in providing basic functionality to manual button and also sets the first set of instructions.
   Second function adds click events to elements as soon as the page loads.
   Third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 

        initial_function();
        addclickEvents();
}

function initial_function(){
        // Intial instruction to be followed
        document.getElementById("demo").innerHTML = "Select any sample";
        
}


//This function is used to add click events to elements
function addclickEvents(){
        document.getElementById("aspirine").addEventListener("click", function() {
            aspirine();
        }, false);
        document.getElementById("solvent").addEventListener("click", function() {
            solvent();           
        }, false);
        document.getElementById("sample").addEventListener("click", function() {
            sample();
        }, false);
        document.getElementById("syringe").addEventListener("click", function() {
            sample();
        }, false);
       
}


function aspirine(){
    document.getElementById("demo").innerHTML = "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.";
    var button1 = document.getElementById('aspirine').style.visibility = "hidden";
    var button2 = document.getElementById('nitrophenol').style.visibility = "hidden";
}

function solvent(){

        document.getElementById("demo").innerHTML = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle";
        var syringe = document.getElementById("injector").src = "images/syringe.gif" ;
        setTimeout("hide() ; inserting_syringe()", 2500);  // 35 seconds  
        var syringe1 = document.getElementById("inserting_syringe").src = "images/inserting_syringe.gif";

        // document.getElementById("inserting_syringe").src = "images/inserting_syringe.gif";
        // setTimeout("show()", 4000);
        // show();
        inserting_syringe();
}

$(document).ready(function(){
  $("#solvent").click(function(){
    $("#inserting_syringe").delay(3000).fadeIn();
    $("#inserting_syringe").fadeToggle(6000);
    $("#mass-spec-with-sol").delay(6000).fadeIn();
    $("#drops").delay(10000).fadeIn();

  });
  $("#sample").click(function(){
    $("#filling-spatula").delay(1000).fadeIn();
    $("#filling-spatula").delay(3000).fadeToggle();
    $("#emptying-spatula").delay(4000).fadeIn();
    $("#emptying-spatula").delay(3000).fadeToggle();
  })
});

function hide() {
    document.getElementById("injector").style.display="none";
}

function sample() {
    document.getElementById("filling-spatula").src = "images/filling_spatula.gif";
}



