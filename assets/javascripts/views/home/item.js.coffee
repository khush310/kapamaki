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
        <a href="http://facebook.com/{{from/id}}"> {{from/name}} </a>
        likes <a href="{{link}}">{{name}}</a>
      </div>
      <div class="clear"></div>
  	"""
  	photo: """ 
  	  <div class="picture">
        <a href="http://facebook.com/{{from/id}}"> 
          <img src="http://graph.facebook.com/{{from/id}}/picture" />
        </a>  
      </div>
      <div class="content">
        <a href="http://facebook.com/{{from/id}}"> {{from/name}} </a>
        posted a  <a href="{{link}}"> photo </a>
        <div>
        <img src="{{picture}}" />
        </div>
      </div>
      <div class="clear"></div>

  	"""
