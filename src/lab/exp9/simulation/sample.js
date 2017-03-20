var model={

	instruction1:'Select a sample',
	instruction2:'Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.',
	instruction3:'Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle',
	instruction4:'Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.',
	instruction5:'Click on the sample solution to make a clear solution.',
	instruction6:'Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer.',
	instruction7:'Click on "start" button to start the spectrometer.',
	instruction8:'Click on the evaluation button for spectral analysis.'

}

var view ={
	step_no : 0,
	solventcount: 0,
	//count = 0;

	//setCursor: Used to set cursor pointers to the elements when it is called.
	setCursor: function(id){
		document.getElementById(id).style.cursor = 'pointer';
	},

	//unsetCursor: Used to unset cursor pointers to the elements when it is called.
	unsetCursor: function(id){
		document.getElementById(id).style.cursor = 'default';
	},

	// setInnerHtml: set innerText to a element.
	setInnerHTML: function (id, innerHTML) {
		document.getElementById(id).innerHTML = innerHTML;
	},

	// addClickEvent: add EventListener to other methods.
	addClickEvent: function(id, method){
		var element = document.getElementById(id);
		element.addEventListener('click', method);
	},

	// removeClickEvent: removes click event to the element on calling this method.
	removeClickEvent: function(id) {
		var element = document.getElementById(id);
		element.removeEventListener('click');
	},

	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function() {
		this.addClickEvent('aspirine', function() { view.aspirine(); });
		this.addClickEvent('caffeine', function() { view.caffeine(); });
		this.addClickEvent('solvent', function() { view.solvent(); });
		this.addClickEvent('sample', function() { view.moveSsample(); });

	},

	//initialInstructions: set of methods to be called when the page loads.
	initialInstructions: function(){
		this.setInnerHTML('instruction', model.instruction1);
		this.setCursor('aspirine');
		// this.hideElements('nirtophenol');
		
		// this.hideElements('buffer_cap');
		// this.hideElements('buffer');
	},

	aspirine: function(){
		if(this.step_no == 0){
			this.setInnerHTML('instruction', model.instruction2);
			this.hideElements('nirtophenol');
		}

		else(this.step_no ==1) {
			this.setInnerHTML('instruction', model.instruction5);
		}
	}

	// init: calls methods to set instructions and activate events.
	init:function(){
		this.activateEvents();
		this.initialInstructions();
	}

	// onload function: call init method on window onload.
	window.onload=function() {
		view.init();
		view.initialInstructions();
	 }