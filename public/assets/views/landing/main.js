(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Landing.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.id = "landing";

    Main.prototype.template = "<div id=\"login_session\">\n  <div class=\"main\"> </div>\n  <p>\n    <strong> kapamaki </strong>\n  </p>\n  <button type=\"submit\"> Login with Facebook</button>\n</div>  ";

    Main.prototype.events = {
      "click button": "logIntoFacebook"
    };

    Main.prototype.logIntoFacebook = function() {
      var redirect_uri;
      humane.log("logging in...");
      redirect_uri = window.location.href;
      console.log(redirect_uri);
      return FB.login(function(response) {
        if (response.authResponse) {
          return window.location.hash = "home";
        } else {
          return window.location.hash = "landing";
        }
      }, {
        scope: 'read_stream,user_education_history,friends_education_history,user_work_history,friends_work_history,user_location,friends_location,user_hometown,friends_hometown',
        redirect_uri: redirect_uri
      });
    };

    return Main;

  })(Backbone.Marionette.ItemView);

}).call(this);
