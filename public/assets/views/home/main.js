(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Home.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      this.onShow = __bind(this.onShow, this);
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.type = "layout";

    Main.prototype.id = "stage-wrapper";

    Main.prototype.template = "<div id= \"sidebar\"> </div>\n<div id= \"main\"> \n  <div id=\"header\"> </div>\n  <div id=\"streams\">\n    <div id=\"box\">\n    </div>\n  </div>\n</div>";

    Main.prototype.regions = {
      sidebarRegion: '#sidebar',
      headerRegion: '#header',
      mainRegion: '#streams'
    };

    Main.prototype.onShow = function() {
      var headerView,
        _this = this;
      console.log("running onSHow");
      headerView = new K.Views.HeaderView;
      this.headerRegion.show(headerView);
      return FB.api('/me', function(response) {
        var sidebarView;
        console.log(response);
        K.currentUser = new Backbone.Model(response);
        sidebarView = new K.Views.Sidebar({
          model: K.currentUser
        });
        _this.sidebarRegion.show(sidebarView);
        mixpanel.identify(response.id);
        mixpanel.people.set({
          $first_name: response.first_name,
          $last_name: response.last_name,
          $name: response.name,
          id: response.id,
          $email: response.email,
          avatar: "http://graph.facebook.com/" + response.id + "/picture"
        });
        return mixpanel.track("user_login");
      });
    };

    return Main;

  })(Backbone.Marionette.Layout);

}).call(this);
