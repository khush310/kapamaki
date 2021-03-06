class K.AppRouter extends Backbone.Router
  routes:
    "landing": "landing"
    "login": "login"
    "home": "home"
    "profile/:id": "profile" #function will take id 

  landing: () ->
    landingView = new K.Views.Landing.Main
    K.app.stageRegion.show landingView
  
  login: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream,user_education_history,friends_education_history,last_name'}
    )

  home: () ->  
    if (not K.app.stageRegion.currentView) or (K.app.stageRegion.currentView.type isnt "layout")
      homeView = new K.Views.Home.Main  #created homeview
      K.app.stageRegion.show homeView
      # created streams -> collection -> streamview finally shown in mainRegion (loading next page)
    else
      homeView = K.app.stageRegion.currentView
    stream = new K.Stream null, owner_id: 'me'
    console.log stream
    streamView = new K.Views.Home.Stream collection: stream
    console.log homeView
    homeView.mainRegion.show streamView
    console.log "finsihed showing two views in regions"
    stream.loadNextPage()
    window.a = stream                

  profile:(id) ->
    console.log id
    loadView = (response) ->
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

    FB.api "/" + id, {fields:"cover,id,first_name,last_name,username,education,hometown,location,work"}, (response) -> 
      if response.error 
        FB.api "/" + id, {fields: "cover,id,username,name"}, (response) ->
          loadView(response)
      else
        loadView(response)









