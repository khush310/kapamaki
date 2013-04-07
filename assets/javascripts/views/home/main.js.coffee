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
     

class K.Views.Sidebar extends Backbone.Marionette.ItemView
  events: 
    "click .ni": "showNI"
    "click .logout": "Logout"
  showNI: () =>
    humane.log("Not Implemented")

  Logout: () =>
    FB.logout () =>
      Backbone.history.navigate("landing", true)

  template: """
    <ul>
      <li class="ni search">
        <input type="text" placeholder="Search" />
      </li>
      <li class="user-name" style="background-image: url(http://graph.facebook.com/{{id}}/picture)">
        <a rel="pushstate" href="#profile/{{id}}"> {{ name }}  </a> 
      </li>
      <li class="news-feeds">
        <a rel="pushstate" href="#home">
          News Feeds
        </a>
      </li>
      <li class="ni messages">
          <a>
            Messages
          </a>
      </li>
      <li class="ni events">
          <a>
            Events
          </a>
      </li>
      <li class="friends">
          <a>
            Friends
          </a>
      </li>
      <li class="logout">
          <a>
            Log Out
          </a>
      </li>
    </ul>
  """       

  onShow: () =>
    console.log @model
  
class K.Views.HeaderView extends Backbone.Marionette.ItemView

  events:
    "click #sidemenu": "toggleSidebar"
    "click .ni": "showNI"
  showNI: (e)=>
    e.preventDefault()
    humane.log ("Not Implemented")

  toggleSidebar: (e) =>
    e.preventDefault()
    console.log "togglingSidebar"
    $("body").toggleClass("showSidebar");


  template:"""    
    <ul>
      <li class="menu">
        <span id="sidemenu">
          <a>
            <span class="icon-reorder"></span>
          </a>
        </span>
        
      </li>
      <li class="ni center-menu">
          <span id="request">
            <a>
            </a>
          </span>
          &emsp;
          <span id="messages">
            <a>
            </a>
          </span>
          &emsp;
          <span id="notifications">
            <a>
            </a>
          </span>
        
      </li>
      <li class="ni chat">
        <span id="chat">
          <a>
            <span class="icon-comments"></span>
          </a>
        </span>
      </li>
    </ul>
  """