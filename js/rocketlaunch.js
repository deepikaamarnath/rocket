var timer= null;

var countdownNum=10;


var changeState= function(state){
	document.body.className='body-state'+state;
	console.log("running");
	clearInterval(timer);
	var countdownNum=10;

	document.getElementById("countdown").innerHTML = countdownNum;

	if(state == 1){
		document.getElementById("yaay").className='yaay';
	}

	if(state == 2){
		timer=setInterval(function(){
			countdownNum=countdownNum-1;
			document.getElementById("countdown").innerHTML = countdownNum;
			if(countdownNum>=5){
				document.getElementById("nervous").className='nervous show';
			}
			else{
				document.getElementById("nervous").className='nervous';
			}
			if(countdownNum<=4 && countdownNum>=1){
				document.getElementById("cantwait").className='cantwait show';
			}
			else{
				document.getElementById("cantwait").className='cantwait';
			}
			if(countdownNum <=0){
				changeState(3);
			}
		}, 500);
	}
	else if(state==3){
		var success=setTimeout(function() {
			var random= Math.round(Math.random()*10);
			console.log(random);
			//success.. launc
			if(random>1){
				changeState(4);
				console.log('state 4');
					document.getElementById("yaay").className='yaay show';
			}
			else{
				changeState(5);
			}
		}, 2000);
	}
}