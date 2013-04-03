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
    humane.log("logging in...")
    redirect_uri = window.location.href
    console.log redirect_uri
    FB.login(
      (response) -> 
        if (response.authResponse)
          window.location.hash = "home"
        else
          window.location.hash = "landing"
      {scope: 'read_stream,user_education_history,friends_education_history,user_work_history,friends_work_history,user_location,friends_location,user_hometown,friends_hometown', redirect_uri: redirect_uri}
    )