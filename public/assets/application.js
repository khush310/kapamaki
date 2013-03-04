(function() {

  K.app = new Backbone.Marionette.Application();

  K.app.addRegions({
    stageRegion: "#stage"
  });

  K.app.bind("initialize:after", function(options) {
    new K.AppRouter;
    Backbone.history.start();
    window.location.hash = "";
    return FB.getLoginStatus(function(resp) {
      if (resp.status === "connected") {
        return window.location.hash = "home";
      } else {
        return window.location.hash = "landing";
      }
    });
  });

}).call(this);
