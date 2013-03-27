class K.Views.Landing.Main extends Backbone.Marionette.ItemView
  
  id: "landing"
  template: """
    <a id="login_into_facebook" href="#">Login</a>
  

  """
  events:
    "click #login_into_facebook": "logIntoFacebook"
  
  logIntoFacebook: () ->
    FB.login(
      (response) -> 
        window.location.hash = "home"
      {scope: 'read_stream'}
    )