storeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'app/modules/store/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
       templateUrl: 'app/modules/store/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'app/modules/cart/cart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

