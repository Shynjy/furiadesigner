init = function(){
   setTimeout(function(){
	   allAnimations();
   }, 200);
} 
  
function allAnimations() {
	 
	btn = document.getElementById('btn');
	btn.addEventListener('click', doClick);

    var animCount = 0;
    var animTimer = setInterval(function(){ theTimer() }, 50),
	
	bg = document.getElementById('bg');


	//  timings

	function theTimer(){
		if(animCount == 0){
			
			part1.setAttribute('class', 'transition-1 partLeft');
			part2.setAttribute('class', 'transition-1 partRight');
			part3.setAttribute('class', 'transition-1 partScale');
			partGlow.setAttribute('class', 'transition-1 PulseEffect');
			
			deviceHolderHolder.setAttribute('class', 'FloatEffect');
			
		} else if(animCount == 5){
			
			deviceHolder.setAttribute('class', 'transition-2 deviceScale');
			
		} else if(animCount == 70){
			
			copy1a.setAttribute('class', 'transition-5 fade-in copyUp');
			
		} else if(animCount == 72){
			
			copy1b.setAttribute('class', 'transition-5 fade-in copyUp');
			
		} else if(animCount == 100){
			
			copyEnd.setAttribute('class', 'transition-3 fade-in');
			
			legal.setAttribute('class', 'transition-3 fade-in');
			logo.setAttribute('class', 'transition-3 fade-in');
			
		} else if(animCount == 120){
			
			retailer.setAttribute('class', 'transition-3 fade-in');

		} else if(animCount == 190){
			
			retailer.setAttribute('class', 'transition-3');
			
		} else if(animCount == 200){

			kink.setAttribute('class', 'transition-3 fade-in');
			
		} else if(animCount == 210){
			
			cta.setAttribute('class', 'transition-5 ctaMove');

        }else if(animCount == 190){
            clearInterval(animTimer);
		} animCount++;
	}

	function doClick(){
		window.open(window.clickTag);
	}


}

