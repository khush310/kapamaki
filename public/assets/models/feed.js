(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Feed = (function(_super) {

    __extends(Feed, _super);

    function Feed() {
      return Feed.__super__.constructor.apply(this, arguments);
    }

    return Feed;

  })(Backbone.Model);

}).call(this);
