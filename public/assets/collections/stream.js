(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Stream = (function(_super) {

    __extends(Stream, _super);

    function Stream() {
      return Stream.__super__.constructor.apply(this, arguments);
    }

    return Stream;

  })(Backbone.Collection);

}).call(this);
