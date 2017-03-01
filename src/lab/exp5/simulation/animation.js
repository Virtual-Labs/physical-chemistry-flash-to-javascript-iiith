$(document).ready(function(){
    $("#sample-button").click(function(){
        $("#chem-border").delay(0).fadeIn();
        $("#benzene").delay(10).fadeIn();
        $("#acetaldehyde").delay(10).fadeIn(); 
        $("#ethyl").delay(10).fadeIn();         
    });

    $("#benzene").click(function() {
        $("#injector").hide();
        $("#green-injector").hide();
        $("#blue-injector").hide();
        $("#red-injector").delay(10).fadeIn();	
   });

    $("#acetaldehyde").click(function() {
        $("#injector").hide();
        $("#green-injector").hide();
        $("#red-injector").hide();
        $("#blue-injector").delay(1).fadeIn();
    });

    $("#ethyl").click(function() {
        $("#injector").hide();
        $("#blue-injector").hide();
        $("#red-injector").hide();
        $("#green-injector").delay(10).fadeIn();
    });

    $("#load-sample").click(function() {
        $("#ring").delay(10).fadeIn();
        $("#vertical-arrows").delay(10).fadeIn();
        $("#below-arrow").delay(10).fadeIn();
        $("#red-injector").animate({top: '245px'});
    });

    $("#start").click(function() {
        $("#constant-molecules").delay(10).fadeIn();
        $("#horizontal-arrows-1").delay(10).fadeIn();
        $("#horizontal-arrows-2").delay(10).fadeIn();
        $("#up-arrow").delay(10).fadeIn();
        $("#molecule1").fadeToggle();
        $("#molecule2").fadeToggle();
        $("#molecule3").fadeToggle();
        $("#molecule4").fadeToggle();
        $("#molecule5").fadeToggle();
        $("#molecule6").fadeToggle();
        $("#molecule7").fadeToggle();
        $("#molecule8").fadeToggle();
        $("#molecule9").fadeToggle();
    });

    $("#plot").click(function() {
       
        $("#graph").hide();
        $("#graph-plot").delay(1).fadeIn();

    });

    $("#evaluate").click(function() {
        // $("#plot-benzene").delay(1).fadeIn();
        window.open("#plot-benzene");
    })
});

