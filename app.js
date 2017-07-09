(function(){

angular.module("MyApp",[])
.controller("myController",myController);

myController.$inject=['$scope'];
function myController($scope){
  $scope.checkIfTooMuch=  function (){
        if($scope.items== undefined)
          $scope.items = "";
        var items=($scope.items).split(",");
        if(items.length<=3 && items[0]!="")
          $scope.items="Enjoy!";
        else if(items.length==1 && items[0]=="")
          $scope.items="Please enter data first";
        else
          $scope.items="Too Much!";
  }
}


})();
