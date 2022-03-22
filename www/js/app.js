angular
  .module("starter", ["ionic", "starter.controllers", "starter.movieStore"])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl",
      })

      .state("movie_list", {
        url: "/movie_list",
        templateUrl: "templates/movie_list.html",
        controller: "MoviesCtrl",
      })

      .state("app.search", {
        url: "/search",
        views: {
          menuContent: {
            templateUrl: "templates/search.html",
          },
        },
      })

      .state("app.browse", {
        url: "/browse",
        views: {
          menuContent: {
            templateUrl: "templates/browse.html",
          },
        },
      })
      .state("app.playlists", {
        url: "/playlists",
        views: {
          menuContent: {
            templateUrl: "templates/playlists.html",
            controller: "PlaylistsCtrl",
          },
        },
      })

      //Estado
      .state("app.single", {
        url: "/playlists/:playlistId",
        views: {
          menuContent: {
            templateUrl: "templates/playlist.html",
            controller: "PlaylistCtrl",
          },
        },
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/movie_list");
  });
