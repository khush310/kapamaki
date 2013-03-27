(function() {

  Handlebars.registerHelper("make_big", function(pic_url) {
    return pic_url.replace("_s", "_n");
  });

  Handlebars.registerHelper("like_count", function(count) {
    if (!count) {
      return " ";
    } else if (count === 0) {
      return " ";
    } else if (count === 1) {
      return count + " Like";
    } else {
      return count + " Likes";
    }
  });

  Handlebars.registerHelper("comment_count", function(count) {
    if (count === 0) {
      return " ";
    } else if (count === 1) {
      return count + " Comment";
    } else {
      return count + " Comments";
    }
  });

  Handlebars.registerHelper("format_story", function(story, story_tags, from) {
    console.log(arguments);
    if (!story) {
      story = "<strong> <a href=\"#profile/{from.id}\">" + from.name + "</a> </strong>";
    }
    _(story_tags).each(function(value, key) {
      return _(value).each(function(tag) {
        return story = story.replace(tag.name, "<strong> <a href=\"#profile/{tag.id}\">" + tag.name + "</a> </strong>");
      });
    });
    return story;
  });

  Handlebars.registerHelper("format_source", function(source) {
    var a;
    a = document.createElement('a');
    a.href = source;
    return a.hostname;
  });

}).call(this);
