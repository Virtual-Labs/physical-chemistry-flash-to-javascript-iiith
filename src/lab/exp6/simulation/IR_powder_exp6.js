var model = {

	instruction1: 'Step1: Select any sample.',
	instruction2: 'Step2: Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar.',
	instruction3: 'Step3: Click on the mortar to grind the sample to fine paste',
	instruction4: 'Step4: Click on the bottle containing Nujol to transfer few drops to the mortar.',
	instruction5: 'Step5: Click on the mortar to make a fine paste of sample',
	instruction6: 'Step6: Click on the mortar to make a fine paste of sample',
	instruction7: 'Step7: Click on mordar to Transfer the sample prepared onto one of the IR discs',
	instruction8: 'Step8: Click on IR discs Place carefully the other disc  and press to form a thin film.',
	instruction9: 'Step9: Click the IR discs to Move the IR plates to the plate holder',
	instruction10: 'Step10: Click start to run the spectrometer.'



	images: ['images/animated_detector.gif', 'images/animated_mortar.gif', 'images/IRdisc.png', 'images/IRplate',
	'images/fill_pippette.gif', 'images/filling_spatula.gif', 'images/inserting_syringe.gif', 'images/zoom_in_spectrometer.gif',
	'images/']
}

	// onload function: call init method on window onload.
		window.onload=function() {
			view.init();
		}


	var view = {

	/* Click counts on elements. Here the clickcount represents the number of clicks on element. On specific 
  	click, specific instructions are executed. Initial click will be considered as zero and then so on the
  	click count is incremented to execute the instructions as per the count of the click on elements. */
	mortarcount: 0;
	

	//hideElements: calls this function to hide the elements by its Id.
	hideElements: function(id){
		 document.getElementById(id).style.visibility = 'hidden' ;
	},

	//showElements: calls this function to show the elements by its id.
	showElements: function(id){
		document.getElementById(id).style.visibility = 'visible' ;
	},

	// replaceElements: Calls this method to replace the element with an other element.
	replaceElements: function(id, image) {
		var element = document.getElementById(id);
		element.src = image;
	},

	//setInnnerHTML : calls this function to set the innertext to an element.
	setInnnerHTML: function(id, innerHTML){
		document.getElementById(id).innerHTML = 'innerHTML';
	},

	//addClcikEvent: calls this method to add EventListener to an element.
	addClcikEvent : function(id, method){
		var element = document.getElementById(id);
		element.addEventListener('click',method);
	},

	//removeClickEvent: calls this method to remove EventListene for an element.
	removeClickEvent: function(id, method){
		document.getElementById(id).style.pointerEvents = 'none';
	},

	//enableClickEvent: Calls this method to enable EventListener for an element.
  	enableClickEvent: function(id){
    	document.getElementById(id).style.pointerEvents = 'auto';
  	},


	// init: calls methods to set instructions and activate events.
		init:function(){
			this.activateEvents();
			this.initialInstructions();
		}

	//resetpage: calls this method to reset the page when we click the button.
	resetpage: function() {
		location.reload();
	},

  	
  	/* activateElements: calls this method to addEventListener to an elements, 
  	when an element is clicked corresponding funtioin gets executed. */
	activateElements: function(id){
		this.addClcikEvent('reset_button', function(){view.resetpage(); });
		this.addClcikEvent('aspirine', function(){view.aspirine(); });
		this.addClcikEvent('caffeine', function(){view.caffeine(); });
		this.addClcikEvent('samplebottle,' function(){view.samplebottle(); });
		this.addClcikEvent('mortar', function(){view.mortar(); });
		this.addClcikEvent('nuzol', function(){view.nuzol(); });
		this.addClcikEvent('IRplate', function(){view.IRplate(); });
		this.addClcikEvent('IRdisc', function(){view.IRdisc(); });
		this.addClcikEvent('start', function(){view.start(); });
		this.addClcikEvent('evaluate',function(){view.evaluate(); });
	},

	/*initialInstructions: calls this method to execute the following menthods:
	 1. when the page loads, this method displays the  */
	initialInstructions: function(){
		this.setInnnerHTML('instruction', model.instruction1);
		// this.removeClickEvent('caffeine');	
		this.removeClickEvent('samplebottle');
		this.removeClickEvent('mortar');
		this.removeClickEvent('nuzol');
		this.removeClickEvent('IRplate');
		this.removeClickEvent('IRdisc');
		this.removeClickEvent('start');
		this.removeClickEvent('evaluate');

	},

	aspirine: function(), caffeine: function(){
		this.setInnnerHTML('instruction', model.instruction2);
		this.hideElements('aspirine');
		this.hideElements('caffeine');
	}

	// samplebottle: function(){
	// 	this.setInnnerHTML('instruction', model.instruction3);
	// 	this.showElements('spatula', model.images[6]);

	// }

	// mortar: function(){
	// 	this.setInnnerHTML('instruction', model.instruction4);
	// 	this.replaceElements('mortar', model.images[2]);

	// }



}

		

