class K.Views.Landing.Main extends Backbone.Marionette.ItemView
  
  id: "landing"
  template: """
    <div id="login_session">
      <p>
        <strong> kapamaki </strong>
      </p>
      <a id="button" href="#" type="submit"> Login with Facebook </a>
      <div id="screenshot"> <img src="/assets/Landing.png" /> 
      </div>
    </div>  
  """
  events:
    "click #button": "logIntoFacebook"
  
  logIntoFacebook: (e) ->
    e.preventDefault()
    humane.log("logging in...")
    redirect_uri = window.location.href
    console.log redirect_uri
    ###
    FB.login(
      (response) -> 
        if (response.authResponse)
          window.location.hash = "home"
        else
          window.location.hash = "landing"
      {scope: 'read_stream,user_education_history,friends_education_history,user_work_history,friends_work_history,user_location,friends_location,user_hometown,friends_hometown', redirect_uri: redirect_uri}
    )
    ###
    permissions = 'read_stream,user_education_history,friends_education_history,user_work_history,friends_work_history,user_location,friends_location,user_hometown,friends_hometown';
    m_appUrl = window.location.origin + "#home" 
    m_appId = "541766599187912"
    permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + m_appId + "&response_type=code&redirect_uri=" + encodeURIComponent(m_appUrl) + "&scope=" + permissions;
    window.location = permissionUrl;
