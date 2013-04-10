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