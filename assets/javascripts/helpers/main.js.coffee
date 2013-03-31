Handlebars.registerHelper "make_big", (pic_url) ->
  pic_url.replace("_s", "_n")

Handlebars.registerHelper "like_count", (count) ->
  if not count
    " "
  else if count is 0
    " "
  else if count is 1
    count + " Like"
  else
    count + " Likes"

Handlebars.registerHelper "comment_count", (count) ->
  if count is 0
    " "
  else if count is 1 
    count + " Comment"
  else
    count + " Comments"

Handlebars.registerHelper "format_story", (story , story_tags, from) ->
  console.log arguments
  if not story
    story = """<strong> <a href="#profile/#{from.id}">#{from.name}</a> </strong>"""

  _(story_tags).each (value, key) ->
    _(value).each (tag) -> # value is the tags array
      story = story.replace tag.name, """<strong> <a href="#profile/#{tag.id}">#{tag.name}</a> </strong>"""
  story

Handlebars.registerHelper "format_source", (source) ->
  a = document.createElement ('a')
  a.href = source
  a.hostname


Handlebars.registerHelper "format_work", (positions) ->
  if positions 
    last_position = _(positions).last()
    """<p> Works at <span> #{last_position.employer.name} <span> </p> """


Handlebars.registerHelper "format_education", (education) ->
  if education
    last_school = _(education).last()
    """<p> Studied at <span> #{last_school.school.name} <span> </p> """





