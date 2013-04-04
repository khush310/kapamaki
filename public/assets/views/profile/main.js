(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.provide("Views.Profile", {});

  K.Views.Profile.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.template = "<div class=\"header\">\n  <div id=\"coverphoto\" style=\"background-image:url({{cover/source}})\" > </div>\n  <div id=\"dp\">\n    <img id=\"profilepic\" src=\"http://graph.facebook.com/{{id}}/picture\" />\n  </div>\n</div>\n<div class=\"info\">\n  <div id=\"name\">\n    {{#if name}}\n      {{name}}\n    {{else}}\n      {{first_name}} {{last_name}}\n    {{/if}}\n  </div>\n  <div id=\"about\">\n    {{{format_work work}}}\n    {{{format_education education}}}\n    {{#if location/name}}  \n      <span class=\"locicon\"> </span>\n      Lives in \n      <span> {{location/name}} </span>\n    {{/if}}\n  </div>\n</div>\n<div id=\"feeds\">\n</div>";

    Main.prototype.regions = {
      feedsRegion: '#feeds'
    };

    return Main;

  })(Backbone.Marionette.Layout);

}).call(this);
