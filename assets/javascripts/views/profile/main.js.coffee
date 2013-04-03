K.provide "Views.Profile", {}
class K.Views.Profile.Main extends Backbone.Marionette.Layout
  template: """
  <div class="header">
    <div id="coverphoto" style="background-image:url({{cover/source}})" > </div>
    <div id="dp">
      <img id="profilepic" src="http://graph.facebook.com/{{id}}/picture" />
    </div>
  </div>
  <div class="info">
    <div id="name">
      {{first_name}} {{last_name}}
    </div>
    <div id="about">
      {{{format_work work}}}
      {{{format_education education}}}
      <span class="locicon"> </span>
      {{#if location/name}}
        Lives in 
        <span> {{location/name}} </span>
      {{/if}}
    </div>
  </div>
  <div id="feeds">
  </div>
  """

  regions:
    feedsRegion: '#feeds'

