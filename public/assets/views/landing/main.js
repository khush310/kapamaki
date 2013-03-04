(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Landing.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.id = "landing";

    Main.prototype.template = "<a id=\"login_into_facebook\" href=\"#\">Login</a>";

    Main.prototype.events = {
      "click #login_into_facebook": "logIntoFacebook"
    };

    Main.prototype.logIntoFacebook = function() {
      return FB.login(function(response) {
        return window.location.hash = "home";
      }, {
        scope: 'read_stream'
      });
    };

    return Main;

  })(Backbone.Marionette.ItemView);

}).call(this);
