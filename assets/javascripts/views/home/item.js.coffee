class K.Views.Home.Item extends Backbone.Marionette.ItemView
  template: () =>
    @templates[@model.get('type')] or ""
  templates:
    video: """
        <div class="title">
          <a href="http://facebook.com/{{from/id}}"> 
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a> 
          <h4>
            {{{format_story story story_tags from}}} 
            <abbr class="timeago" title="{{updated_time}}"> </abbr>
          </h4>
          <p>  </p>
        </div>
        <div class="content">
          <p> {{name}} </p>
          <div class="video">
              <img class="pic" src="{{picture}}" />
              <div class="description">
                <h4> {{name}} </h4>
                {{format_source link}}
              </div>
              <div class="clear"> </div> 
          </div>
        </div>      
        <div class="clear"> </div>
        <div class="box">
          {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}
        </div>
    """
    link: """ 
        <div class="title">
          <a href="http://facebook.com/{{from/id}}">
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a>
          <h4>
            {{{format_story story story_tags from}}}
          </h4>
          <p> <abbr class="timeago" title="{{updated_time}}"> </abbr> </p>
        </div>
        <div class="content">
          <p>{{message}}</p>
          {{#if name}}
          <div class="link">
            <img class="pic" src="{{picture}}" />
            <div class="description">
              <div class="description_container">
                <h4>{{name}}</h4>
                <p>{{description}}</p>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          {{/if}}
        </div>
        <div class="clear"></div>
        <div class="box">
          {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}
        </div>
    """
    photo: """
        <div class="title">
          <a href="http://facebook.com/{{from/id}}"> 
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a> 
          <h4>
            {{{format_story story story_tags from}}} 
          </h4>
          <p> <abbr class="timeago" title="{{updated_time}}"> </abbr> </p>
        </div> 
        <div class="content">
            <p>{{message}}</p>
          <div class="pic_container">
            <a href="{{link}}"> 
              <img src="{{make_big picture}}" />
            </a>
          </div>
        </div>
        <div class="clear"></div>
        <div class="box">
          {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}
        </div>
    """
    status: """
      <div class="title">
        <a href="http://facebook.com/{{from/id}}"> 
          <img src="http://graph.facebook.com/{{from/id}}/picture" />
        </a>
        <h4>
            {{{format_story story story_tags from}}} 
        </h4>
        <p> <abbr class="timeago" title="{{updated_time}}"> </abbr> </p>
      </div>
      <div class="status">
        <p>{{message}}</p>
      </div>
      <div class="clear"></div>
      <div class="box">
        {{like_count likes/count}}
        &nbsp;&nbsp;
        {{comment_count comments/count}}
      </div>
    """
  onShow: ( ) =>
    jQuery("abbr.timeago").timeago();
