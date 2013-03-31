class K.AppRouter extends Backbone.Router
  routes:
    "home": "home"
    "landing": "landing"
    "login": "login"
    "profile/:id": "profile" #function will take id 

  home: () ->  
    homeView = new K.Views.Home.Main  #created homeview
    K.app.stageRegion.show homeView
    # created streams -> collection -> streamview finally shown in mainRegion (loading next page)
    stream = new K.Stream null, owner_id: 'me'
    console.log stream
    streamView = new K.Views.Home.Stream collection: stream
    console.log homeView
    homeView.mainRegion.show streamView
    console.log "finsihed showing two views in regions"
    stream.loadNextPage()
    window.a = stream                

  landing: () ->
    landingView = new K.Views.Landing.Main
    K.app.stageRegion.show landingView
  
  login: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream,user_education_history,friends_education_history,last_name'}
    )

  profile:(id) ->
    console.log id
    FB.api "/" + id, {fields:"cover,id,first_name,last_name,username,education,hometown,location,work"}, (response) ->
      console.log response
      profile = new Backbone.Model response 
      profileView = new K.Views.Profile.Main({model: profile})
      layoutView = K.app.stageRegion.currentView
      layoutView.mainRegion.show profileView
      stream = new K.Stream null, owner_id: response.id
      console.log stream
      streamView = new K.Views.Home.Stream collection: stream
      profileView.feedsRegion.show streamView
      console.log "finsihed showing two views in regions"
      stream.loadNextPage()
       









