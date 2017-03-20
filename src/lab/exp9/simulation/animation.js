// $(document).ready(function(){
//         $("#aspirine").click(function(){ 
//          $("nitrophenol").hide();
//             // $("demo").text("Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.");                
//         });

//         $("#solvent").click(function(){
//          $("#syringe").delay(0).fadeIn();            
//          // $("demo").text("Select any sample");
//         });

//         $("#sample").click(function() {
//          $("#filling-spatula").delay(0).fadeIn();
//         });

// // });   




// var demo = element.textContent;
// element.textContent = "Select any sample";

$(document).ready(function() {
    $('#demo').html('Select any sample');
    $("#aspirine").click(function() {
        $("#aspirine").hide();
        $("#nitrophenol").hide();
        $('#demo').hide();
        $("demo").html("Click on the solvent bottle to draw 1 ml of the solvent (methanol) and \n inject it into the sample inlet to clean any impurity in the sample pathway.");
      

        // $("#evaluate").click(function(){
        //         window.open("graph/aspirin_MS_exp9.html");
        //     });  
    });

    $("#solvent").click(function() {
        // var elementA = injector;
        // var elementB = fill_pippette;

        // if (elementA == injector) {
        //     $("#injector").one('click').delay(0).fadeIn();
        //     $("#injector").delay(3000).fadeOut();
        //     $("#inserting-syringe").delay(3500).fadeIn();
        //     $("#mass-spec-with-sol").delay(3600).fadeIn('fast');
        //     $("#mass-spec").delay(37000).fadeOut('fast');
        

        // else (elementB ==fill_pippette )
        //     $("#fill_pippette").delay(0).fadeIn('fast');
        //     $("#fill_pippette").delay(38000).fadeOut('fast');    
    // }
        $("#injector").delay(0).fadeIn();
        $("#injector").delay(3000).fadeOut();
        $("#inserting-syringe").delay(3500).fadeIn();
        $("#mass-spec-with-sol").delay(3600).fadeIn('fast');
        $("#mass-spec").delay(37000).fadeOut('fast');
        
        
    };

    $("#sample").click(function() {
        $("#filling-spatula").delay(0).fadeIn();
        $("#filling-spatula").delay(2000).fadeOut('fast');
        $("#emptying-spatula").delay(2300).fadeIn();
        $("#emptying-spatula").delay(2400).fadeOut('fast');
        $("#empty-bottle").delay(3500).fadeOut('fast');
        $("#bottle-with-sample").delay(3500).fadeIn('fast');

    });

    $("#bottle-with-sample").click(function(){
        $("#")
    })
});