(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  K.Stream = (function(_super) {

    __extends(Stream, _super);

    function Stream() {
      this.initialize = __bind(this.initialize, this);

      this.loadNextPage = __bind(this.loadNextPage, this);
      return Stream.__super__.constructor.apply(this, arguments);
    }

    Stream.prototype.loadNextPage = function() {
      var url,
        _this = this;
      if (this.owner_id === "me") {
        url = '/me/home';
      } else {
        url = '/' + this.owner_id + '/feed';
      }
      return FB.api(url, {
        until: this.until
      }, function(response) {
        var _ref;
        if (response.error) {

        } else {
          console.log(response.data);
          console.log(response.paging);
          _this.add(response.data);
          if ((_ref = response.paging) != null ? _ref.next : void 0) {
            return _this.until = response.paging.next.match(/until=(.*)/)[1];
          }
        }
      });
    };

    Stream.prototype.initialize = function(models, options) {
      console.log(options);
      return this.owner_id = options.owner_id;
    };

    return Stream;

  })(Backbone.Collection);

}).call(this);
