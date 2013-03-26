(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.AppRouter = (function(_super) {

    __extends(AppRouter, _super);

    function AppRouter() {
      return AppRouter.__super__.constructor.apply(this, arguments);
    }

    AppRouter.prototype.routes = {
      "home": "home",
      "landing": "landing",
      "login": "login",
      "profile/:id": "profile"
    };

    AppRouter.prototype.home = function() {
      var homeView;
      homeView = new K.Views.Home.Main;
      return K.app.stageRegion.show(homeView);
    };

    AppRouter.prototype.landing = function() {
      var landingView;
      landingView = new K.Views.Landing.Main;
      return K.app.stageRegion.show(landingView);
    };

    AppRouter.prototype.login = function() {
      return FB.login(function(response) {
        return window.location.hash = "home";
      }, {
        scope: 'read_stream'
      });
    };

    AppRouter.prototype.profile = function() {
      var profileView;
      profileView = new K.Views.Profile.Main;
      return K.app.stageRegion.show(profileView);
    };

    return AppRouter;

  })(Backbone.Router);

}).call(this);
