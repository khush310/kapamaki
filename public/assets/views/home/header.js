(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.HeaderView = (function(_super) {

    __extends(HeaderView, _super);

    function HeaderView() {
      this.toggleSidebar = __bind(this.toggleSidebar, this);

      this.showNI = __bind(this.showNI, this);
      return HeaderView.__super__.constructor.apply(this, arguments);
    }

    HeaderView.prototype.events = {
      "click #sidemenu": "toggleSidebar",
      "click .ni": "showNI"
    };

    HeaderView.prototype.showNI = function(e) {
      e.preventDefault();
      return humane.log("Not Implemented");
    };

    HeaderView.prototype.toggleSidebar = function(e) {
      e.preventDefault();
      console.log("togglingSidebar");
      return $("body").toggleClass("showSidebar");
    };

    HeaderView.prototype.template = "    \n<ul>\n  <li class=\"menu\">\n    <span id=\"sidemenu\">\n      <a>\n        <span class=\"icon-reorder\"></span>\n      </a>\n    </span>\n    \n  </li>\n  <li class=\"ni center-menu\">\n      <span id=\"request\">\n        <a>\n        </a>\n      </span>\n      &emsp;\n      <span id=\"messages\">\n        <a>\n        </a>\n      </span>\n      &emsp;\n      <span id=\"notifications\">\n        <a>\n        </a>\n      </span>\n    \n  </li>\n  <li class=\"ni chat\">\n    <span id=\"chat\">\n      <a>\n        <span class=\"icon-comments\"></span>\n      </a>\n    </span>\n  </li>\n</ul>";

    return HeaderView;

  })(Backbone.Marionette.ItemView);

}).call(this);
