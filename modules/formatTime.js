function formatTime(seconds) {
  
	function addZero(s) {
    
    	return (s < 10 ? '0' : '') + s;
  
  	}
  
	var days = Math.floor(seconds / (3600*24));  
  	var hours = Math.floor(seconds / ((60*60) - days));
  	var minutes = Math.floor(seconds % (60*60) / 60);
  	var seconds = Math.floor(seconds % 60);

  	return addZero(days) + ' days ' + addZero(hours) + ' hr ' + addZero(minutes) + ' min ' + addZero(seconds) + ' sec';

}

exports.print = formatTime;