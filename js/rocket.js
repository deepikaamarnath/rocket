setTimeout(function(){
	location.href='rocket.html';
},2000);



console.log('hello friends');
		var car={
			make:'vw',
			typer:'polo',
			color:'blue',
			numberoftyre:4,
			ison: false,
			seats:['seat1',
					'seat2',
					'seat3'
			],
			turnon: function(){
				this.ison= true;
			},
			fly: function(){
				alert('fly');
			},
			switchCar: function(ison){
				if(ison==true){
					ison= false;
				}
				else{
					ison=true;
				}
			}
		};

		


		var doCoolStuff= function(){
			var currentClassName= document.getElementById('cool').className;
			if (currentClassName == "cool"){
				document.getElementById('cool').className= 'cool red' ;		
			}
			else
				{
					document.getElementById('cool').className= 'cool' ;	
				}
			
		}
		