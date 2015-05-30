var dateUtil;

describe("Testing calculateTheNumberOfWorkingDaysBetweenTwoDates() in dateUtil.js :  ", function() {

    beforeEach(function() {

        dateUtil = require("../src/dateUtil");
    });

    it("Week Test - 10-May-2015 to 16-May-2015 - 5 working days", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,10);
      var endDate = new Date();
      endDate.setFullYear(2015,4,16);

      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(startDate,endDate)).toEqual(5);
    });

    it("Mid of a week to mid of next week - 13/May/2015 to 20/May/2015 - 5 working days  ", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,13);
      var endDate = new Date();
      endDate.setFullYear(2015,4,20);

      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(startDate,endDate)).toEqual(6);
    });

    it("Whole month test - 01/May/2015 to 31/May/2015 - 21 working days" , function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,1);
      var endDate = new Date();
      endDate.setFullYear(2015,4,31);

      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(startDate,endDate)).toEqual(21);
    });

    it("Whole Year Test - 01/Jan/2016 to 31/Dec/2015 - 261 working days", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,0,1);
      var endDate = new Date();
      endDate.setFullYear(2015,11,31);

      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(endDate,startDate)).toEqual(261);
    });

    it("Start date and End date are same - 1 working day", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,14);
      var endDate = new Date();
      endDate.setFullYear(2015,4,14);
      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(startDate,endDate)).toEqual(1);
    });

    it("Start date and End date are weekends - 0 working day", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,9);
      var endDate = new Date();
      endDate.setFullYear(2015,4,10);
      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(startDate,endDate)).toEqual(0);
    });

    it("Start date and End date are in reverse order", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,9);
      var endDate = new Date();
      endDate.setFullYear(2015,4,14);
      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(endDate,startDate)).toEqual(4);
    });

    it("Start date is Saturday and End date is Sunday", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,9);
      var endDate = new Date();
      endDate.setFullYear(2015,4,17);
      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(endDate,startDate)).toEqual(5);
    });

    it("Start date is Sunday and End date is Thursday - 10-May-2015 to 14-May-2015", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,10);
      var endDate = new Date();
      endDate.setFullYear(2015,4,14);
      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(endDate,startDate)).toEqual(4);
    });

    it("Start date is Thursday and End date is Saturday - 14-May-2015 to 16-May-2015 - 2 working days", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,14);
      var endDate = new Date();
      endDate.setFullYear(2015,4,16);
      expect(dateUtil.calculateTheNumberOfWorkingDaysBetweenTwoDates(endDate,startDate)).toEqual(2);
    });

});


describe("Testing calculateTheDifferenceBetweenTwoDatesInSeconds() in dateUtil.js : ", function() {

    beforeEach(function() {

        dateUtil = require("../src/dateUtil");
    });

    it("Start date and End date are same - Expected 0 seconds  ", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,10);
      var endDate = new Date();
      endDate.setFullYear(2015,4,10);

      expect(dateUtil.calculateTheDifferenceBetweenTwoDatesInSeconds(endDate,startDate)).toEqual(0);
    });

    it("Strat date and End Date in reverse order - Expected 86400000 Seconds ", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,10);
      var endDate = new Date();
      endDate.setFullYear(2015,4,11);

      expect(dateUtil.calculateTheDifferenceBetweenTwoDatesInSeconds(endDate,startDate)).toEqual(86400000);
    });

    it("One day differnce in Seconds - Expected 86400000 Seconds ", function() {

      var startDate = new Date();
      startDate.setFullYear(2015,4,10);
      var endDate = new Date();
      endDate.setFullYear(2015,4,11);

      expect(dateUtil.calculateTheDifferenceBetweenTwoDatesInSeconds(startDate,endDate)).toEqual(86400000);
    });

  });


  describe("Testing convertLocalDateToUtcDate() in dateUtil.js : ", function() {

      beforeEach(function() {

          dateUtil = require("../src/dateUtil");
      });

      it("testing the method convertLocalDateToUtcDate()", function() {

        var aDate = new Date();
        aDate.setFullYear(2015,4,10);
        var aDate_UTC = new Date(aDate.getUTCFullYear(), aDate.getUTCMonth(), aDate.getUTCDate(),  aDate.getUTCHours(), aDate.getUTCMinutes(), aDate.getUTCSeconds());

        expect(dateUtil.convertLocalDateToUtcDate(aDate)).toEqual(aDate_UTC);
      });

    });
