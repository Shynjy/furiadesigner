init = function(){
   setTimeout(function(){
	   allAnimations();
   }, 200);
}

function allAnimations() {

    var animCount = 0;
    var animTimer = setInterval(function(){ theTimer() }, 50),
	
		bg1 = document.getElementById('bg1'),
		bg2 = document.getElementById('bg2'),
		overlay = document.getElementById('overlay'),

		logo1 = document.getElementById('logo1'),

		colour_wheel = document.getElementById('colour_wheel'),
		spark = document.getElementById('spark'),
		
		outline1 = document.getElementById('outline1'),
		outline2 = document.getElementById('outline2'),
		outline3 = document.getElementById('outline3'),

		badges_end = document.getElementById('badges_end'),
		rightHolder = document.getElementById('rightHolder'),
		right_badge = document.getElementById('right_badge'),
		leftHolder = document.getElementById('leftHolder'),
		left_badge = document.getElementById('left_badge'),
		deviceHolder = document.getElementById('deviceHolder'),
		device = document.getElementById('device'),
		
		copy1a = document.getElementById('copy1a'),
		copy1b = document.getElementById('copy1b'),
		copy1c = document.getElementById('copy1c'),

		copy2a = document.getElementById('copy2a'),
		copy2b = document.getElementById('copy2b'),

		copy3a = document.getElementById('copy3a'),
		copy3b = document.getElementById('copy3b'),
		
		copyEnd = document.getElementById('copyEnd'),
		retail = document.getElementById('retail'),
		
		cta = document.getElementById('cta');

		var legal1 = document.getElementById('legal-1');
		var legal2 = document.getElementById('legal-2');
		var legalOpen = document.getElementById('legal-open');
		/*var legalClick = document.getElementById('legal-clickthrough');*/
		var legalVis = false;

	//  timings

	function theTimer(){
		
		if(animCount == 0){

			outline1.setAttribute('class', 'transition-2 fade-in');
			
		} else if(animCount == 7){	
			
			logo1.setAttribute('class', 'transition-3 fade-out');
			
		} else if(animCount == 10){	

			copy1a.setAttribute('class', 'transition-3 left');
			
		} else if(animCount == 20){

			outline1.setAttribute('class', 'transition-2');
			outline2.setAttribute('class', 'transition-2 fade-in');

		} else if(animCount == 30){

			outline2.setAttribute('class', 'transition-2');
			outline3.setAttribute('class', 'transition-2 fade-in');
			
		} else if(animCount == 35){
			
			copy1a.setAttribute('class', 'transition-3 left lefter');

			copy1b.setAttribute('class', 'transition-3 left');
			colour_wheel.setAttribute('class', 'transition-3 fade-in');
			
		} else if(animCount == 45){
			
			copy1c.setAttribute('class', 'transition-3 left');
			
		} else if(animCount == 70){
			
			bg2.setAttribute('class', 'transition-4 fade-in');

		} else if(animCount == 80){
			
			copy2a.setAttribute('class', 'transition-3 left');
							
			leftHolder.setAttribute('class', 'transition-3 left');	
			left_badge.setAttribute('class', 'FloatEffect');	
			left_badge_shadow.setAttribute('class', 'ShadowEffect');

		} else if(animCount == 82){
			
			copy2b.setAttribute('class', 'transition-3 left');
			
			rightHolder.setAttribute('class', 'transition-3 left');
			right_badge.setAttribute('class', 'FloatEffect');
			right_badge_shadow.setAttribute('class', 'ShadowEffect');
			
		} else if(animCount == 130){
			
			copy2a.setAttribute('class', 'transition-3 left lefter');
			copy2b.setAttribute('class', 'transition-3 left lefter');
			leftHolder.setAttribute('class', 'transition-3 left lefter');	
			rightHolder.setAttribute('class', 'transition-3 left lefter');	
			
		} else if(animCount == 135){
			
			spark.setAttribute('class', 'fade-in');	
			
		} else if(animCount == 137){
			
			spark.setAttribute('class', '');	
				
		} else if(animCount == 139){
			
			spark.setAttribute('class', 'fade-in');	

			logo1.setAttribute('class', 'transition-1 fade-in');
					
			copy3a.setAttribute('class', 'transition-3 copyMove');	
			copy3b.setAttribute('class', 'transition-1 fade-in');

		} else if(animCount == 150){

			cta.setAttribute('class', 'transition-3 left');
			
		} else if(animCount == 155){
			
			badges_end.setAttribute('class', 'transition-3 left');	
						
		} else if(animCount == 165){
			
			device.setAttribute('class', 'transition-3  fade-in deviceScale');	
			
		} else if(animCount == 170){
			
			deviceHolder.setAttribute('class', 'FloatEffect');

		} else if(animCount == 190){
			
			copy3a.setAttribute('class', 'transition-3 copyMove fade-out');	
			
		} else if(animCount == 195){

			copy3b.setAttribute('class', 'transition-1');
			
		} else if(animCount == 205){
			
			copyEnd.setAttribute('class', 'transition-3 copyendMove');
			
		} else if(animCount == 215){
			
			legalOpen.style.display="block"
			legal2.setAttribute('class', 'transition-1 fade-in');
			retail.setAttribute('class', 'transition-1 fade-in');

        }
        else if(animCount == 600){
            clearInterval(animTimer);
		} animCount++;
	}
	
	//  legal stuff

	legalOpen.addEventListener('mouseover', showLegal);
	legalOpen.addEventListener('mouseleave', hideLegal);

	function showLegal(){
		legal1.setAttribute('class', 'transition-2 fade-in');
		overlay.setAttribute('class', 'transition-2 fade-half');
	}
	
	function hideLegal(){
		legal1.setAttribute('class', 'transition-2');
		overlay.setAttribute('class', 'transition-2');
	}
}
