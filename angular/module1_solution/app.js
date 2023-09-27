(function () {
'use strict';
    
    angular.module('Food', [])
    
    .controller('FoodController', FoodController);
    FoodController.$inject = ['$scope'];

    function FoodController ($scope){

   $scope.text = "";
   $scope.message = "Enter your lunch please";

   $scope.Check = function (){
      if ( $scope.text.length > 0 ){
    
          $scope.message = CheckTooMuch($scope.text);
      } else {
          $scope.message= "Enter your lunch please";
      }
    
    }; 
    
function CheckTooMuch(string){
    var lunch = string.split(',');
    
    if ( lunch.length <= 3 ){
      return "Enjoy!";
    } else {
        return "Too Much!";
    }

  }

}

})();