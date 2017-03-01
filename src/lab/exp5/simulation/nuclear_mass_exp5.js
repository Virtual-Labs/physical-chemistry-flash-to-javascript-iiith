var sol = ["benzene", "acetaldehyde", "ethyl"] ;

// function changeSolution() {
//    if(sol == benzene){
//       document.getElementById("benzene").style.visibility = "visible";
      

//    else if(sol == acetaldehyde) {
//       document.getElementById("acetaldehyde").style.visibility = "visible" ;

//    }

//    else if(sol == ethyl) {
//       document.getElementById("ethyl").style.visibility ="visibile"; 
//    }

// }

// }

function benzene() {

   document.getElementById("red-injector").style.visibility = "visible";
   var elem = document.getElementById("syringe");   
      var pos = 0;
      var id = setInterval(frame, 5);
         function frame() {
            if (pos == 345) {
                clearInterval(id);
                alert("Hello!");
            } 
            else {
                pos++; 
                  elem.style.left = pos + 'px'; 
                  elem.style.left = pos + 'px'; 
                  // alert("hello!!");
             }
         }
}