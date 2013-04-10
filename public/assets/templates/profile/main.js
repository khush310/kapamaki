(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["profile/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "  \n        <span class=\"locicon\"> </span>\n        Lives in \n        <span> "
    + escapeExpression(((stack1 = ((stack1 = depth0.location),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </span>\n      ";
  return buffer;
  }

  buffer += "<div class=\"header\">\n    <div id=\"coverphoto\" style=\"background-image:url("
    + escapeExpression(((stack1 = ((stack1 = depth0.cover),stack1 == null || stack1 === false ? stack1 : stack1.source)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\" > </div>\n    <div id=\"dp\">\n      <img id=\"profilepic\" src=\"http://graph.facebook.com/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/picture\" />\n    </div>\n  </div>\n  <div class=\"info\">\n    <div id=\"name\">\n      ";
  stack2 = helpers['if'].call(depth0, depth0.name, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"about\">\n      ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.format_work),stack1 ? stack1.call(depth0, depth0.work, options) : helperMissing.call(depth0, "format_work", depth0.work, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.format_education),stack1 ? stack1.call(depth0, depth0.education, options) : helperMissing.call(depth0, "format_education", depth0.education, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.location),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </div>\n  <div id=\"feeds\">\n  </div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["profile/main"];
}).call(this);
