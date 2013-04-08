(function() {

  K.app = new Backbone.Marionette.Application();

  K.app.addRegions({
    stageRegion: "#stage"
  });

  K.app.bind("initialize:after", function(options) {
    mixpanel.track("user_visit");
    new K.AppRouter;
    window.location.hash = "";
    Backbone.history.start();
    return FB.getLoginStatus(function(resp) {
      if (resp.status === "connected") {
        return window.location.hash = "home";
      } else {
        return window.location.hash = "landing";
      }
    });
  });

}).call(this);
