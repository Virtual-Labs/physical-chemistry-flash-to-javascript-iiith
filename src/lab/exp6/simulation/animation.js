
$(document).ready(function() {
    $('#step1').html('Select any sample');
    $("#aspirine").click(function() {
        $("#aspirine").hide();
        $("#nitrophenol").hide();        
         $('#step1').hide();

         var display_txt = "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and" +"<br/>" 
                            + "inject it into the sample inlet to clean any impurity in the sample pathway.";
         $('#step2').html(display_txt);
      
    });

var clickcount;
    $("#solvent").click(function() {
        alert("Hello World!")
        if(clickcount =0) {
            alert("hello world!");
            // var display_txt = "click on sample";
        }
        $("#injector").delay(0).fadeIn();
        $("#injector").delay(3000).fadeOut();
        $("#inserting-syringe").delay(3500).fadeIn();
        $("#mass-spec-with-sol").delay(3600).fadeIn('fast');
        $("#mass-spec").delay(37000).fadeOut('fast');
        $("#step2").hide();
        // var display_txt = "Click on the sample bottle to transfer small amount (around 1mg) of the" + "<br/>" 
        //                 + "substance into the empty sample bottle.";
        $("#step3").html(display_txt);
    });

    $("#sample").click(function() {
        $("#step3").hide();
        var display_txt = "Click on the solvent bottle to transfer 5 ml of the solvent (methanol)" + "<br/>" 
                        + "to the substance taken.";
        $("#step4").html(display_txt);
        $("#filling-spatula").delay(0).fadeIn();
        $("#filling-spatula").delay(2000).fadeOut('fast');
        $("#emptying-spatula").delay(2300).fadeIn();
        $("#emptying-spatula").delay(2400).fadeOut('fast');
        $("#empty-bottle").delay(3500).fadeOut('fast');
        $("#bottle-with-sample").delay(3500).fadeIn('fast');

        $("solvent").click(function(){
	    $("#step4").hide();
	    var display_text = "Click on the sample solution to make a clear solution.";
            $("#fill-pippette").delay(0).fadeIn();
            $("#fill-pippette").delay(2000).fadeOut();
            $("#empty-pippette").delay(2100).fadeIn();

        })
    });

    // $("#bottle-with-sample").click(function(){
    //     $("#")
    // })
});
