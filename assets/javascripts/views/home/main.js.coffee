class K.Views.Home.Main extends Backbone.Marionette.Layout
  type: "layout"
  id: "stage-wrapper"
  template: """
    <div id= "sidebar"> </div>
    <div id= "main"> 
      <div id="header"> </div>
      <div id="streams">
        <div id="box">
        </div>
      </div>
    </div>
  """
  
  regions:  
    sidebarRegion: '#sidebar'
    headerRegion: '#header'
    mainRegion: '#streams'

  onShow: () =>
    console.log "running onSHow"

    headerView = new K.Views.HeaderView
    @headerRegion.show headerView

    FB.api '/me', (response) =>
      console.log response
      K.currentUser = new Backbone.Model response
      sidebarView = new K.Views.Sidebar({ model: K.currentUser })
      @sidebarRegion.show sidebarView
      mixpanel.identify(response.id)
      mixpanel.people.set({$first_name: response.first_name, $last_name: response.last_name, $name: response.name, id: response.id, $email: response.email, avatar: "http://graph.facebook.com/#{response.id}/picture"});
      mixpanel.track("user_login")
