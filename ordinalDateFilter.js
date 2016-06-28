angular.module('outOfOfficeApp').filter('ordinalDate', function($filter) {
/* code from http://plnkr.co/edit/nGj08KzQrZTiCP4ubDOc?p=preview */
  var suffixes = ["th", "st", "nd", "rd"];
  return function(input, format) {
    var dtfilter = $filter('date')(input, format);
    var day = parseInt($filter('date')(input, 'dd'));
    var relevantDigits = (day < 30) ? day % 20 : day % 30;
    console.log(day, relevantDigits);
    var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return dtfilter.replace('oo', suffix);
    //return dtfilter+suffix;
  };
});