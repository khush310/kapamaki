class K.AppRouter extends Backbone.Router
  routes:
    "home": "home"
    "landing": "landing"
    "login": "login"
    "profile/:id": "profile"

  home: () ->
    homeView = new K.Views.Home.Main
    K.app.stageRegion.show homeView

  landing: () ->
    landingView = new K.Views.Landing.Main
    K.app.stageRegion.show landingView
  
  login: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream'}
    )

  profile:() ->
    profileView = new K.Views.Profile.Main
    K.app.stageRegion.show profileView