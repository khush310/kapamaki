class K.Views.Home.Item extends Backbone.Marionette.ItemView
  template: () =>
    @templates[@model.get('type')] or ""
  templates:
    link: """ 
      <div class="header">
        <div class="picture">
          <span>
            {{{format_story story story_tags from}}}
          </span>
          <a href="http://facebook.com/{{from/id}}">
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a>   
        </div>
        <div class="content">
          <br> </br>{{message}}<br></br>
        </div>
        <div class="clear"></div>
        <div class="remarks">
          {{like_count likes/count}}  {{comment_count comments/count}}
        </div>
      </div>
    """
    photo: """ 
      <div class="header">
        <div class="picture">
          <a href="http://facebook.com/{{from/id}}"> 
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a>  
          <span>
            {{{format_story story story_tags from}}} 
          </span>
        </div>
      </div>
      <div class="content">
        <div class="pic_container">
          <a href="{{link}}"> 
            <img src="{{make_big picture}}" />
          </a>
        </div>
      </div>
      <div class="clear"></div>
      <div class="remarks">
        {{like_count likes/count}}  {{comment_count comments/count}}
      </div>
    """
    status: """
      <div class="picture">
        <a href="http://facebook.com/{{from/id}}"> 
          <img src="http://graph.facebook.com/{{from/id}}/picture" />
        </a>  
      </div>
      <div class="status">
        <a href="http://facebook.com/{{from/id}}"> {{from/name}} </a>
       <br></br>{{message}}<br></br>
      </div>
      <div class="clear"></div>
      <div class="remarks">
        {{like_count likes/count}}  {{comment_count comments/count}}
      </div>
    """

