(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Views.Home.Item = (function(_super) {

    __extends(Item, _super);

    function Item() {
      this.onShow = __bind(this.onShow, this);

      this.template = __bind(this.template, this);
      return Item.__super__.constructor.apply(this, arguments);
    }

    Item.prototype.template = function() {
      return this.templates[this.model.get('type')] || "";
    };

    Item.prototype.templates = {
      video: "<div class=\"title\">\n  <a href=\"http://facebook.com/{{from/id}}\"> \n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a> \n  <h4>\n    {{{format_story story story_tags from}}} \n    <div>\n      <abbr class=\"timeago\" title=\"{{created_time}}\"> {{created_time}} </abbr>\n    </div>    \n  </h4>\n</div>\n<div class=\"content\">\n  <p> {{name}} </p>\n  <div class=\"video\">\n      <img class=\"pic\" src=\"{{picture}}\" />\n      <div class=\"description\">\n        <h4> {{name}} </h4>\n        {{format_source link}}\n      </div>\n      <div class=\"clear\"> </div> \n  </div>\n</div>      \n<div class=\"clear\"> </div>\n<div class=\"box\">\n  {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}\n</div>",
      link: " \n<div class=\"title\">\n  <a href=\"http://facebook.com/{{from/id}}\">\n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a>\n  <h4>\n    {{{format_story story story_tags from}}}\n    <div>\n      <abbr class=\"timeago\" title=\"{{created_time}}\"> {{created_time}}</abbr>\n    </div>\n  </h4>\n</div>\n<div class=\"content\">\n  <p>{{message}}</p>\n  <div class=\"link\">\n    <img class=\"pic\" src=\"{{picture}}\" />\n    <div class=\"description\">\n      <h3>{{name}}</h3>\n      <p>{{description}}</p>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</div>\n<div class=\"clear\"></div>\n<div class=\"box\">\n  {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}\n</div>",
      photo: "<div class=\"title\">\n  <a href=\"http://facebook.com/{{from/id}}\"> \n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a> \n  <h4>\n    {{{format_story story story_tags from}}} \n    <div>\n      <abbr class=\"timeago\" title=\"{{created_time}}\"> {{created_time}}</abbr>\n    </div>\n  </h4>\n</div> \n<div class=\"content\">\n    <p>{{message}}</p>\n  <div class=\"pic_container\">\n    <a href=\"{{link}}\"> \n      <img src=\"{{make_big picture}}\" />\n    </a>\n  </div>\n</div>\n<div class=\"clear\"></div>\n<div class=\"box\">\n  {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}\n</div>",
      status: "<div class=\"title\">\n  <a href=\"http://facebook.com/{{from/id}}\"> \n    <img src=\"http://graph.facebook.com/{{from/id}}/picture\" />\n  </a>\n  <h4>\n    {{{format_story story story_tags from}}} \n    <div>\n      <abbr class=\"timeago\" title=\"{{created_time}}\"> {{created_time }} </abbr>\n    </div>\n  </h4>\n</div>\n<div class=\"status\">\n  <p>{{message}}</p>\n</div>\n<div class=\"clear\"></div>\n<div class=\"box\">\n  {{like_count likes/count}}\n  &nbsp;&nbsp;\n  {{comment_count comments/count}}\n</div>"
    };

    Item.prototype.onShow = function() {
      return jQuery("abbr.timeago").timeago();
    };

    return Item;

  })(Backbone.Marionette.ItemView);

}).call(this);
