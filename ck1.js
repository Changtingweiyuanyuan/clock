onload=()=>{

const retime=()=>{
  let day = ['SUN', 'MON', 'TUS', 'WED', 'THR', 'FRI', 'SAT'];
  const nt =new Date()
  
  const ch=nt.getHours()
  const cm=nt.getMinutes()
  const cs=nt.getSeconds()

  const yy=nt.getFullYear()
  const mm=nt.getMonth()
  const da=nt.getDate()
  const dy=nt.getDay()
  
  function chk0(num) {
    return (num < 10) ? "0" + num : num;
  }
  document.getElementById("clkTime").textContent = `${chk0(ch)}:${chk0(cm)}:${chk0(cs)}`
  document.getElementById("clkDate").textContent =`${yy}-${mm+1}-${da}-${day[dy]}`
}

retime()
setInterval(retime,1000)


// changeColor

	setInterval(function(){
		var dawn = '#78d';
		var day = '#1bf';
		var dusk = '#036';
		
		var mood = new Date();
		var second = mood.getSeconds();
		if(second < 20){
			$('body').css('background', dawn);
			$('.trees').css('fill', dawn);
			$('.sky-dawn').css('opacity','1');
			$('.sky-day').css('opacity','1');
			$('.hills').css('fill','#c66');
		} else if(second < 40) {
			$('body').css('background', day);
			$('.trees').css('fill', day);
			$('.sky-dawn').css('opacity','0');
			$('.sky-day').css('opacity','1');
			$('.hills').css('fill','#db9');
		} else {
			$('body').css('background', dusk);
			$('.trees').css('fill', dusk);
			$('.sky-day').css('opacity','0');
			$('.hills').css('fill','#0be');
		}

    });


}
