(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Sidebar = (function(_super) {

    __extends(Sidebar, _super);

    function Sidebar() {
      this.onShow = __bind(this.onShow, this);

      this.Logout = __bind(this.Logout, this);

      this.showNI = __bind(this.showNI, this);
      return Sidebar.__super__.constructor.apply(this, arguments);
    }

    Sidebar.prototype.events = {
      "click .ni": "showNI",
      "click .logout": "Logout"
    };

    Sidebar.prototype.showNI = function() {
      return humane.log("Not Implemented");
    };

    Sidebar.prototype.Logout = function() {
      var _this = this;
      return FB.logout(function() {
        return Backbone.history.navigate("landing", true);
      });
    };

    Sidebar.prototype.template = "<ul>\n  <li class=\"ni search\">\n    <input type=\"text\" placeholder=\"Search\" />\n  </li>\n  <li class=\"user-name\" style=\"background-image: url(http://graph.facebook.com/{{id}}/picture)\">\n    <a rel=\"pushstate\" href=\"#profile/{{id}}\"> {{ name }}  </a> \n  </li>\n  <li class=\"news-feeds\">\n    <a rel=\"pushstate\" href=\"#home\">\n      News Feeds\n    </a>\n  </li>\n  <li class=\"ni messages\">\n      <a>\n        Messages\n      </a>\n  </li>\n  <li class=\"ni events\">\n      <a>\n        Events\n      </a>\n  </li>\n  <li class=\"friends\">\n      <a>\n        Friends\n      </a>\n  </li>\n  <li class=\"logout\">\n      <a>\n        Log Out\n      </a>\n  </li>\n</ul>";

    Sidebar.prototype.onShow = function() {
      return console.log(this.model);
    };

    return Sidebar;

  })(Backbone.Marionette.ItemView);

}).call(this);
