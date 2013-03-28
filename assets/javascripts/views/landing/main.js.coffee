class K.Views.Landing.Main extends Backbone.Marionette.ItemView
  
  id: "landing"
  template: """
    <div id="login_session">
      <div class="main"> </div>
      <p>
        <strong> kapamaki </strong>
      </p>
      <button type="submit"> Login with Facebook</button>
    </div>  
  """
  events:
    "click button": "logIntoFacebook"
  
  logIntoFacebook: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream'}
    )