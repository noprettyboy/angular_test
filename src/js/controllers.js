function PhoneListCtrl2($scope) {
  $scope.phones = [
    {"name": "Nexus S zzw",
     "snippet": "Fast just got faster with Nexus S.",
 	 "age":21},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
 	 "age":22},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet.",
 	 "age":20}
  ];
  $scope.hello = "zzw";
  $scope.orderProp = 'age';
}
function PhoneListCtrl($scope, Phone){
	// $http.get('json/phones.json').success(function(data){
	// 	$scope.phones = data.splice(0,5);
	// });
	$scope.phones = Phone.query();
	$scope.hello = "zzw";
  	$scope.orderProp = 'age';
}
// PhoneListCtrl2.$inject = ['$scope', '$http'];

function PhoneDetailCtrl($scope, $http, $routeParams) {
	$http.get('json/phones.json').success(function(data){
		$scope.phones = data;
	});
    $scope.selPhoneId = $routeParams.phoneId;

    $scope.setClick = function(detail){
    	alert(detail);
    }
}