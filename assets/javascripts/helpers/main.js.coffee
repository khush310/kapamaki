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
		story = """<a href="">#{from.name}</a>"""

	_(story_tags).each (value, key) ->
  	_(value).each (tag) -> # value is the tags array
    	story = story.replace tag.name, """<a href="">#{tag.name}</a>"""
	story


