//Inicializando la app
(function () {
  var app = angular.module("starter.movieStore", [
    "ionic",
    "starter.controllers",
  ]);

  app.directive("toTmdbURL", function () {
    return { template: "<h3>Hello World!!</h3>" };
  });
  app.factory("FetchPopularMovies", function () {
    return {
      movies: function ($http) {
        var params = {
          api_key: "ebf95b66009594c2a15b9c67097ea420",
          language: "es",
          page: 1,
        };

        return $http
          .get("https://api.themoviedb.org/3/movie/popular", { params: params })
          .success(function (posts) {
            console.log(posts);
            $scope.spinner = false;
            angular.forEach(posts.results, function (post) {
              $scope.posts.push(post);
            });
          });
      },
    };
  });
})();

// return console.log(
//   $resource(
//     "https://api.themoviedb.org/3/movie/popular",
//     { params: params },
//     {
//       query: { method: "GET", isArray: true, responseType: "json" },
//     }
//   )
// );

// movies: function ($resource) {
//   return $resource(
//     "https://api.themoviedb.org/3/movie/popular",
//     { params: params },
//     {
//       query: { method: "GET", isArray: true, responseType: "json" },
//     }
//   );
// },
