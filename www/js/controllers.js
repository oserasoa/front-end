angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('Hoteles', function ($scope, $http) {

    $scope.arr = function (num) {
      var arr = [];
      for (i = 0; i < num; i++) {
        arr.push(i);
      }
      return arr;
    }

    $scope.changeStatus = function (val) {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3001/hoteles',
        params: { stars: val }
      }).success(function (data, status, headers, config) {
        $scope.hoteles = data;
        console.log($scope.hoteles);
        //console.log(arr);
        //$scope.stars = function()
      }).error(function (data, status, headers, config) {
        console.log("Ha fallado la petición. Estado HTTP:" + status);
      });
    };

    
    $scope.changeStatus(0);

  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
