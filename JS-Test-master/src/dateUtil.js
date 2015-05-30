module.exports = {

	calculateTheNumberOfWorkingDaysBetweenTwoDates: function(startDate, endDate){

	  if (endDate < startDate)
		{
			var temp = startDate;
			startDate = endDate;
			endDate = temp;
		}

    var millisecondsPerDay = 86400 * 1000;
    startDate.setHours(0,0,0,1);
    endDate.setHours(23,59,59,999);
    var diffInMilliSeconds = endDate - startDate;
    var days = Math.ceil(diffInMilliSeconds / millisecondsPerDay);

    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);

    var startDay = startDate.getDay();
    var endDay = endDate.getDay();

    if (startDay - endDay > 1)
        days = days - 2;

    if (startDay == 0 && endDay != 6)
        days = days - 1

    if (endDay == 6 && startDay != 0)
        days = days - 1

    return days;

	},

	calculateTheDifferenceBetweenTwoDatesInSeconds: function(startDate, endDate){
		var diffInMilliSeconds = endDate - startDate;
		if (diffInMilliSeconds < 0)
			return -diffInMilliSeconds;
		return diffInMilliSeconds;
	},

	convertLocalDateToUtcDate: function(date){
 		return	new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
	},

};
