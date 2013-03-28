class K.Views.Landing.Main extends Backbone.Marionette.ItemView
  
  id: "landing"
  template: """
    <div id="login_session">
      <div class="image_holder"> </div>
      <p>
        <input id="user_name" type="text" placeholder="Email" />
      </p>
      <p>
        <input id="user_password" type="text" placeholder="Password" />
      </p>
        <button type="submit"> Login </button>  
      </p>
    </div>  
  """
  events:
    "click #login_into_facebook": "logIntoFacebook"
  
  logIntoFacebook: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream'}
    )