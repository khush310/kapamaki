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
      FB.api('/me', function(response) {
        var sidebarView;
        console.log(response);
        K.currentUser = new Backbone.Model(response);
        sidebarView = new K.Views.Sidebar({
          model: K.currentUser
        });
        return _this.sidebarRegion.show(sidebarView);
      });
      return FB.api('/me/home', function(response) {
        var stream, streamView;
        console.log(response);
        stream = new K.Stream(response.data);
        console.log(stream);
        streamView = new K.Views.Home.Stream({
          collection: stream
        });
        console.log(_this);
        _this.mainRegion.show(streamView);
        return console.log("finsihed showing two views in regions");
      });
    };

    return Main;

  })(Backbone.Marionette.Layout);

  K.Views.Sidebar = (function(_super) {

    __extends(Sidebar, _super);

    function Sidebar() {
      this.onShow = __bind(this.onShow, this);
      return Sidebar.__super__.constructor.apply(this, arguments);
    }

    Sidebar.prototype.template = "<ul>\n  <li class=\"search\">\n    <input type=\"text\" placeholder=\"Search\" />\n  </li>\n  <li class=\"user-name\">\n    <span>\n      <img src=\"http://graph.facebook.com/{{id}}/picture\" />\n    </span>\n    <a href=\"#image\"> {{ name }}  </a>\n  </li>\n  <li class=\"news-feeds\">\n    <a href=\"#\">\n      News Feeds\n    </a>\n  </li>\n  <li class=\"messages\">\n      <a href=\"#\">\n        Messages\n      </a>\n  </li>\n  <li class=\"events\">\n      <a href=\"#\">\n        Events\n      </a>\n  </li>\n  <li class=\"friends\">\n      <a href=\"#\">\n        Friends\n      </a>\n  </li>\n  <li class=\"logout\">\n      <a href=\"#\">\n        Log Out\n      </a>\n  </li>\n</ul>";

    Sidebar.prototype.onShow = function() {
      return console.log(this.model);
    };

    return Sidebar;

  })(Backbone.Marionette.ItemView);

  K.Views.HeaderView = (function(_super) {

    __extends(HeaderView, _super);

    function HeaderView() {
      this.toggleSidebar = __bind(this.toggleSidebar, this);
      return HeaderView.__super__.constructor.apply(this, arguments);
    }

    HeaderView.prototype.events = {
      "click #sidemenu": "toggleSidebar"
    };

    HeaderView.prototype.toggleSidebar = function() {
      console.log("togglingSidebar");
      return $("body").toggleClass("showSidebar");
    };

    HeaderView.prototype.template = "    \n<ul>\n  <li class=\"menu\">\n    <span id=\"sidemenu\">\n      <a href=\"#side-menu\">\n        <span class=\"icon-reorder\"></span>\n      </a>\n    </span>\n    \n  </li>\n  <li class=\"center-menu\">\n      <span id=\"request\">\n        <a href=\"#\">\n        </a>\n      </span>\n      &emsp;\n      <span id=\"messages\">\n        <a href=\"#\">\n        </a>\n      </span>\n      &emsp;\n      <span id=\"notifications\">\n        <a href=\"#\">\n        </a>\n      </span>\n    \n  </li>\n  <li class=\"chat\">\n    <span id=\"chat\">\n      <a href=\"#chat\">\n        <span class=\"icon-comments\"></span>\n      </a>\n    </span>\n  </li>\n</ul>";

    return HeaderView;

  })(Backbone.Marionette.ItemView);

}).call(this);
