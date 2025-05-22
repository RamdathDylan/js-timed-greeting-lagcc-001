'use strict';
const isAfternoon = require('./isAfternoon');
const isMorning = require('./isMorning');
const isNight = require('./isNight');



function greeting (time){
	// Add Code here after you are done in the other lib folders, use isAfternoon, isMorning, & isNight functions in here...
	if(time >= 6 && time < 12){
		return isMorning(time);
	} else if (time >= 12 && time < 19){
		return isAfternoon(time);
	} else if (time >= 19 && time <= 24){
		return isNight(time);
	} else {
		return "Invalid Time";
	}
};

module.exports = greeting;
