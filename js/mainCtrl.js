angular.module('app')
	.controller('mainCtrl', function ($scope, service) {

		$scope.users = service.getUsers();

		$scope.addUser = function(){
			var newUserObj = {
				name: $scope.name,
				city: $scope.city,
				state: $scope.state,
				age: $scope.age,
				gender: $scope.gender
			}
			service.addUser(newUserObj);

			$scope.name = "";
			$scope.city = "";
			$scope.state = "";
			$scope.age = "";
			$scope.gender = "";

			$scope.users = service.getUsers();
		}

		$scope.deleteUser = function(index){
			service.deleteData(index);
			$scope.users = service.getUsers();
		}






// end service		
	});