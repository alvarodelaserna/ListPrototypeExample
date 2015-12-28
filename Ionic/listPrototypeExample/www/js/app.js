// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ListCtrl', function($scope, $http){
  var vm = this;
  var URL = "http://javatechig.com/?json=get_recent_posts&count=45";

  vm.items = {};

  $http({
    method: 'GET',
    url: URL
  }).then(function successCallback(response) {
    // este callback se llamará de forma asíncrona
    // cuando la respuesta esté disponible
    vm.items = response.data.posts;
  }, function errorCallback(response) {
    // se llama de forma asíncrona al ocurrir un error
    // o cuando el servidor responde con un código de error
    console.log(response);
  });

})
