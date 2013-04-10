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