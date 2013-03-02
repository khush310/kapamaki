//= require ./lib/jquery
//= require ./lib/underscore
//= require ./lib/backbone
//= require ./lib/backbone.marionette
//= require ./lib/handlebars

$(document).ready () ->  
  $("#sidemenu").click () ->
    $("body").toggleClass("showSidebar");
