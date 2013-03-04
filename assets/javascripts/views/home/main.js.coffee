class K.Views.Home.Main extends Backbone.Marionette.Layout
  
  id: "stage-wrapper"
  template: """

    <div id= "sidebar"> </div>
    <div id= 'main'> 
      <div id="header"> </div>
    </div>
    <div
  """
  
  regions: 
    sidebarRegion: '#sidebar'
    headerRegion: '#header'

  onShow: () =>
    console.log "running onSHow"

    headerView = new K.Views.HeaderView
    @headerRegion.show headerView

    FB.api '/me', (response) =>
      console.log response
      K.currentUser = new Backbone.Model response
      sidebarView = new K.Views.Sidebar({ model: K.currentUser })
      @sidebarRegion.show sidebarView

    console.log "finsihed showing two views in regions"
###
    FB.api '/me/home', (response) => 
      console.log response
      stream = new K.Stream response.data
      console.log stream
      streamView = new K.Views.Home.Stream collection: stream
      console.log @
      @streamRegion.show streamView
###

class K.Views.Sidebar extends Backbone.Marionette.ItemView

  template: """
    <ul>
      <li class="search">
        <input type="text" placeholder="Search" />
      </li>
      <li class="user-name">
        <span>
          <img src="http://graph.facebook.com/{{id}}/picture" />
        </span>
        <a href="#image"> {{ name }}  </a>
      </li>
      <li class="news-feeds">
        <a href="#">
          News Feeds
        </a>
      </li>
      <li class="messages">
          <a href="#">
            Messages
          </a>
      </li>
      <li class="events">
          <a href="#">
            Events
          </a>
      </li>
      <li class="friends">
          <a href="#">
            Friends
          </a>
      </li>
      <li class="logout">
          <a href="#">
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

  toggleSidebar: () =>
    console.log "togglingSidebar"
    $("body").toggleClass("showSidebar");


  template:"""    
    <ul>
      <li class="menu">
        <span id="sidemenu">
          <a href="#side-menu">
            <span class="icon-reorder"></span>
          </a>
        </span>
        
      </li>
      <li class="center-menu">
          <span id="request">
            <a href="#">
            </a>
          </span>
          &emsp;
          <span id="messages">
            <a href="#">
            </a>
          </span>
          &emsp;
          <span id="notifications">
            <a href="#">
            </a>
          </span>
        
      </li>
      <li class="chat">
        <span id="chat">
          <a href="#chat">
            <span class="icon-comments"></span>
          </a>
        </span>
      </li>
    </ul>


  """