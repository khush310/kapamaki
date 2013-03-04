class K.AppRouter extends Backbone.Router
  routes:
    "home": "home"
    "landing": "landing"
    "login": "login"

  home: () ->
    HomeView = new K.Views.Home.Main
    K.app.stageRegion.show HomeView

  landing: () ->
    HomeView = new K.Views.Landing.Main
    K.app.stageRegion.show HomeView
  
  login: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream'}
    )