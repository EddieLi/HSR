var hsrApp = angular.module('hsrApp', []);

hsrApp.controller('moduleCtrl', function ($scope, $http) {
	$scope.query = '';
  	$http.get('/HSR/data/modules.js')
       .then(function(res){
          $scope.moduleList = res.data;                
        });

	$scope.updateQuery=function(key){
		$scope.query=key;
	}

});

	

hsrApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});