(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Home.Item = (function(_super) {

    __extends(Item, _super);

    function Item() {
      this.template = __bind(this.template, this);
      return Item.__super__.constructor.apply(this, arguments);
    }

    Item.prototype.template = function() {
      return this.templates[this.model.get('type')] || "";
    };

    Item.prototype.templates = {
      link: " \n<div class=\"picture\">\n  <a href=\"http://facebook.com/{{from/id}}\">\n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a>  \n</div>\n<div class=\"content\">\n  {{{format_story story story_tags from}}} \n</div>\n<div class=\"clear\"></div>\n{{like_count likes/count}}  {{comment_count comments/count}}\n",
      photo: " \n<div class=\"picture\">\n  <a href=\"http://facebook.com/{{from/id}}\"> \n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a>  \n</div>\n<div class=\"content\">\n  {{{format_story story story_tags from}}} \n  <div class=\"pic_container\">\n    <a href=\"{{link}}\"> \n      <img src=\"{{make_big picture}}\" />\n    </a>\n  </div>\n</div>\n<div class=\"clear\"></div>\n  {{like_count likes/count}}  {{comment_count comments/count}}",
      status: "<div class=\"picture\">\n  <a href=\"http://facebook.com/{{from/id}}\"> \n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a>  \n</div>\n<div class=\"status\">\n  <a href=\"http://facebook.com/{{from/id}}\"> {{from/name}} </a>\n <br></br>{{message}}\n</div>\n<div class=\"clear\"></div>\n{{like_count likes/count}}  {{comment_count comments/count}}\n"
    };

    return Item;

  })(Backbone.Marionette.ItemView);

}).call(this);
