K.app = new Backbone.Marionette.Application()

K.app.addRegions
  stageRegion: "#stage"

K.app.bind "initialize:after", (options) ->
  new K.AppRouter
  Backbone.history.start()
  window.location.hash = ""
  FB.getLoginStatus(
    (resp) ->
      if resp.status is "connected"
        window.location.hash = "home"
      else
        window.location.hash = "landing"
  )
