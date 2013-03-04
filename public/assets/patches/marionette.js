(function() {

  Backbone.Marionette.Renderer.render = function(template, data) {
    var compiledTemplate, temp;
    if (_.isFunction(template)) {
      temp = template(data);
    } else {
      temp = template;
    }
    compiledTemplate = Handlebars.compile(temp);
    return compiledTemplate(data);
  };

  Backbone.Marionette.Region.prototype.show = function(view) {
    this.ensureEl();
    view.render();
    this.close();
    this.open(view);
    if (view.onShow) {
      view.onShow();
    }
    view.trigger("show");
    if (this.onShow) {
      this.onShow(view);
    }
    this.trigger("view:show", view);
    return this.currentView = view;
  };

}).call(this);
