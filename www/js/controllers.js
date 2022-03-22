angular
  .module("starter.controllers", ["starter.movieStore"])

  .controller("AppCtrl", function ($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal
      .fromTemplateUrl("templates/login.html", {
        scope: $scope,
      })
      .then(function (modal) {
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
      console.log("Doing login", $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller("PlaylistCtrl", function ($scope, $stateParams) {})

  .controller("MoviesCtrl", function ($scope, FetchPopularMovies, $http) {
    $scope.posts = [];

    var params = {
      api_key: "ebf95b66009594c2a15b9c67097ea420",
      language: "es",
      page: 1,
    };
    $scope.spinner = true;
    $http
      .get("https://api.themoviedb.org/3/movie/popular", { params: params })
      .success(function (posts) {
        console.log(posts);
        $scope.spinner = false;
        angular.forEach(posts.results, function (post) {
          $scope.posts.push(post);
        });
      });

    // $scope.movies();
    $scope.update = function () {
      FetchPopularMovies.movies();
    };

    $scope.CargarNuevosPost = function(){

      if ($scope.posts.lenght>0){
        params('after')  =$scope.posts[$scope.posts.lenght -1].name
      }
      $http
      .get("https://api.themoviedb.org/3/movie/popular", { params: params })
    .success(function (posts) {
      console.log(posts);
      angular.forEach(posts.results, function (post) {
        $scope.posts.push(post);
      });
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
    }



  });

app.controller("LoadingCtrl", function ($scope, $ionicLoading) {
  $scope.show = function () {
    $ionicLoading
      .show({
        template: "Loading...",
        duration: 3000,
      })
      .then(function () {
        console.log("The loading indicator is now displayed");
      });
  };
  $scope.hide = function () {
    $ionicLoading.hide().then(function () {
      console.log("The loading indicator is now hidden");
    });
  };
});
