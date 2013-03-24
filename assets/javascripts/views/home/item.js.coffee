class K.Views.Home.Item extends Backbone.Marionette.ItemView
  template: () =>
    @templates[@model.get('type')] or ""
  templates:
    link: """ 
      <div class="picture">
        <a href="http://facebook.com/{{from/id}}">
          <img src="http://graph.facebook.com/{{from/id}}/picture" />
        </a>  
      </div>
      <div class="content">
        {{{format_story story story_tags from}}} 
      </div>
      <div class="clear"></div>
      {{like_count likes/count}}  {{comment_count comments/count}}

    """
    photo: """ 
      <div class="picture">
        <a href="http://facebook.com/{{from/id}}"> 
          <img src="http://graph.facebook.com/{{from/id}}/picture" />
        </a>  
      </div>
      <div class="content">
        {{{format_story story story_tags from}}} 
        <div class="pic_container">
          <a href="{{link}}"> 
            <img src="{{make_big picture}}" />
          </a>
        </div>
      </div>
      <div class="clear"></div>
        {{like_count likes/count}}  {{comment_count comments/count}}
    """
    status: """
      <div class="picture">
        <a href="http://facebook.com/{{from/id}}"> 
          <img src="http://graph.facebook.com/{{from/id}}/picture" />
        </a>  
      </div>
      <div class="status">
        <a href="http://facebook.com/{{from/id}}"> {{from/name}} </a>
       <br></br>{{message}}
      </div>
      <div class="clear"></div>
      {{like_count likes/count}}  {{comment_count comments/count}}

    """

