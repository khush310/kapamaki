//= require ./lib/jquery
//= require ./lib/underscore
//= require ./lib/backbone
//= require ./lib/backbone.marionette
//= require ./lib/handlebars
//= require ./lib/jquery.timeago
//= require ./lib/jquery.more
//= require ./lib/humane
//= require_tree ./helpers
//= require ./patches/marionette
//= require ./prelude
//= require ./structure
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routes
//= require ./application

$(document).ready () ->
  K.app.start();
