/*jshint unused:false*/

// This file is used to help build the 'demo' documentation page and should be updated with example code
function rxAgeCtrl ($scope) {
    var day = 1000 * 60 * 60 * 24;
    $scope.ageHours = new Date((Date.now() - (day / 2.3))).toString();
    $scope.ageDays = new Date((Date.now() - (day * 1.5))).toString();
    $scope.ageMonths = new Date((Date.now() - (day * 40.2))).toString();
    $scope.ageYears = new Date((Date.now() - (day * 380.1))).toString();
}
