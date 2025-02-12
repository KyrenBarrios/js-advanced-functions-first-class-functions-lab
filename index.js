// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
return arr.slice(arr.length - 2)

}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

const createFareMultiplier = function (number) {
  return function (fare) {
    return number * fare;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, lastOrFirst) {
  return lastOrFirst(drivers);
};

