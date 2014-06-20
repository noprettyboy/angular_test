angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'router1.htm',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'router2.htm', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);

angular.module('phonecatFilters', ['ngRoute']).
  filter('checkmark', function() {
    return function(input){
      return input ? '\u2713' : '\u2718'; 
    }
  }
);

angular.module('phonecatServices', ['ngResource']).
  factory('Phone', function($resource){
    return $resource('json/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }
);