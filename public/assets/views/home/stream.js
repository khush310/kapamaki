(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Home.Stream = (function(_super) {

    __extends(Stream, _super);

    function Stream() {
      this.loadNextPage = __bind(this.loadNextPage, this);
      return Stream.__super__.constructor.apply(this, arguments);
    }

    Stream.prototype.itemView = K.Views.Home.Item;

    Stream.prototype.template = "<div class=\"listcontainer\">\n</div>\n<div class=\"paging\">\n  <a href=\" \"> NextPage </a>\n</div>";

    Stream.prototype.events = {
      "click .paging a": "loadNextPage"
    };

    Stream.prototype.loadNextPage = function(e) {
      e.preventDefault();
      this.collection.loadNextPage();
      return humane.log("Loading...");
    };

    Stream.prototype.itemViewContainer = ".listcontainer";

    return Stream;

  })(Backbone.Marionette.CompositeView);

}).call(this);
