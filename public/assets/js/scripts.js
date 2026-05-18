window.addEvent('domready', function(){

	/* ----------Config Vars----------- */
		
	var slideTimer = 8000;  //time between slides (1 second = 1000), a.k.a. the interval duration
	var transitionTime = 1250; //transition time (1 second = 1000)
	var items = $$('.slide_item');  //Get array of elements for sliding
	
	/* --------end config vars-------- */
	
	//Setup positions
	items.each(function(element, index) {
		
		//since the viewer obviously has javascript on, we can remove the 'first_item' class
		if(index == 0){
			element.removeClass('first_item');
			element.setStyle('left', "0");
		}
		else{
			element.setStyle('left', "500");
			element.setStyle('opacity', "0");
		}
	
	});
	//end setup
	
	//Slider Stuff
	var slideFunction = new function() {
		
		var numItems = items.length;  //get number of slider items
		var itemNum = 0;  //initialize a variable to hold the current slide index
		
		var slideIt = function(){ 
		
			//get item to slide out
			var curItem = items[itemNum];  
			
			//change index
			if(itemNum < (numItems - 1)){
				itemNum++; 
			}
			else{
				itemNum = 0;
			}
			
			//now get item to slide in using new index
			var newItem = items[itemNum];
			
			//set up our animation stylings for out and in motions (note:  Fx.Styles does NOT exist in moo 1.2, so we must use Fx.Morph or Fx.Tween)
			var item_in = new Fx.Morph(newItem, {
				     duration: transitionTime, 
				     transition: Fx.Transitions.Quad.easeInOut, 
				     wait:false
			});
			
			var item_out = new Fx.Morph(curItem, {
				     duration: transitionTime, 
				     transition: Fx.Transitions.Quad.easeInOut, 
				     wait:false
			});
			
			//we will set a beginning value here
			//this is so that it gives the illusion of continuous motion from one direction, even after the first cycle of items
			item_in.start({
			'left': [500, 0],
			'opacity':[0,1]
			});
			
			//no beginning values needed, since we always want to push the old item out to the left
			item_out.start({
			'left': '-500',
			'opacity':[0]
			});
			
		};
		
		//call the function, periodically  (note: the interval period is defined at the top of this file)
		slideIt.periodical(slideTimer, this); 
	}
	
	
});