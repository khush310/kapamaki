(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Stream = (function(_super) {

    __extends(Stream, _super);

    function Stream() {
      this.loadNextPage = __bind(this.loadNextPage, this);
      return Stream.__super__.constructor.apply(this, arguments);
    }

    Stream.prototype.loadNextPage = function() {
      var _this = this;
      return FB.api('/me/home', {
        until: this.until
      }, function(response) {
        console.log(response.paging);
        _this.add(response.data);
        return _this.until = response.paging.next.match(/until=(.*)/)[1];
      });
    };

    return Stream;

  })(Backbone.Collection);

}).call(this);
