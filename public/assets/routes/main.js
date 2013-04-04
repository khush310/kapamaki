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
      var homeView, stream, streamView;
      homeView = new K.Views.Home.Main;
      K.app.stageRegion.show(homeView);
      stream = new K.Stream(null, {
        owner_id: 'me'
      });
      console.log(stream);
      streamView = new K.Views.Home.Stream({
        collection: stream
      });
      console.log(homeView);
      homeView.mainRegion.show(streamView);
      console.log("finsihed showing two views in regions");
      stream.loadNextPage();
      return window.a = stream;
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
        scope: 'read_stream,user_education_history,friends_education_history,last_name'
      });
    };

    AppRouter.prototype.profile = function(id) {
      var loadView;
      console.log(id);
      loadView = function(response) {
        var layoutView, profile, profileView, stream, streamView;
        console.log(response);
        profile = new Backbone.Model(response);
        profileView = new K.Views.Profile.Main({
          model: profile
        });
        layoutView = K.app.stageRegion.currentView;
        layoutView.mainRegion.show(profileView);
        stream = new K.Stream(null, {
          owner_id: response.id
        });
        console.log(stream);
        streamView = new K.Views.Home.Stream({
          collection: stream
        });
        profileView.feedsRegion.show(streamView);
        console.log("finsihed showing two views in regions");
        return stream.loadNextPage();
      };
      return FB.api("/" + id, {
        fields: "cover,id,first_name,last_name,username,education,hometown,location,work"
      }, function(response) {
        if (response.error) {
          return FB.api("/" + id, {
            fields: "cover,id,username,name"
          }, function(response) {
            return loadView(response);
          });
        } else {
          return loadView(response);
        }
      });
    };

    return AppRouter;

  })(Backbone.Router);

}).call(this);
