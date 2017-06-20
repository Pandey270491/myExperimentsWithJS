var time = new Date();
		var hh;
		var mm;
		var ss;


			hh = time.getHours();
			mm = time.getMinutes();
			ss = time.getSeconds();

		var secDeg = ss*6 + 90;

		var minDeg = mm*6 + 90;

		var hourDeg;

		function getTimeNow()
		{
			time = new Date();
			hh = time.getHours();
			mm = time.getMinutes();
			ss = time.getSeconds();

			RotateHand();
		}


		function RotateHand()
		{

			var sec_hand = document.getElementById('sec');
			
			secDeg+=6;
			sec_hand.style.transform = 'rotate('+secDeg+'deg)';

			if (ss==59) {
				rotateMinHand();
			}

		}

		function rotateMinHand()
		{

			var min_hand = document.getElementById('min');
			minDeg+=6;
			min_hand.style.transform = 'rotate('+minDeg+'deg)';

				rotateHourHand();
		}

		function rotateHourHand()
		{

			if (hh>12) 
			{

			 	hourDeg= (90 + (hh-12)*30);
			}
			if (hh==12) 
			{
				hourDeg=90;
			}
			
			var hour_hand = document.getElementById('hour');

			hourDeg+=minDeg/60;
			hour_hand.style.transform = 'rotate('+hourDeg+'deg)';

		}

		setInterval(getTimeNow,1000);