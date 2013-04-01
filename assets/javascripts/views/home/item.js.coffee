
class K.Views.Home.Item extends Backbone.Marionette.ItemView
  template: () =>
    @templates[@model.get('type')] or ""
  templates:
    video: """
        <div class="title">
          <a href="#profile/{{from/id}}"> 
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a> 
          <h4>
            {{{format_story story story_tags from}}} 
            <div>
              <abbr class="timeago" title="{{created_time}}"> {{created_time}} </abbr>
            </div>    
          </h4>
        </div>
        <div class="content">
          <div id="vid">
            <p> {{name}} </p>
          </div>
          <div class="video_container">
              <div><img class="pic" src="{{picture}}" /> </div>
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
          <a href="#profile/{{from/id}}">
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a>
          <h4>
            {{{format_story story story_tags from}}}
            <div>
              <abbr class="timeago" title="{{created_time}}"> {{created_time}}</abbr>
            </div>
          </h4>
        </div>
        <div class="content">
          <p style="padding: 0 1em 0 1em">
            {{message}}
          </p>
          {{#if name}}
            <div class="link_container">
              <div> <img class="pic" src="{{picture}}" /> </div>
              <div class="description">
                <h3>{{name}}</h3>
                <p>{{description}}</p>
              </div>
            </div>
          </div>
        {{/if}}
        <div class="clear"></div>
        <div class="box">
          {{like_count likes/count}} &nbsp; &nbsp;{{comment_count comments/count}}
        </div>
    """
    photo: """
        <div class="title">
          <a href="#profile/{{from/id}}"> 
            <img src="http://graph.facebook.com/{{from/id}}/picture" />
          </a> 
          <h4>
            {{{format_story story story_tags from}}} 
            <div>
              <abbr class="timeago" title="{{created_time}}"> {{created_time}}</abbr>
            </div>
          </h4>
        </div> 
        <div class="content">
            <div id="pic>
              <p>
                {{message}}
              </p>
            </div>
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
          <div>
            <abbr class="timeago" title="{{created_time}}"> {{created_time }} </abbr>
          </div>
        </h4>
      </div>
      <div class="status">
        <p>
          {{message}}
        </p>
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



