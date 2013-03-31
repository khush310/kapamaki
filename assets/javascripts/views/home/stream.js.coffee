class K.Views.Home.Stream extends Backbone.Marionette.CompositeView
  itemView: K.Views.Home.Item 
  template: """
    <div class="listcontainer">
    </div>
    <div class="paging">
      <a href=" "> NextPage </a>
    </div>
  """
  events:
    "click .paging a":"loadNextPage"
  loadNextPage: (e) =>
    e.preventDefault()
    @collection.loadNextPage()
    humane.log("Loading...")

  itemViewContainer: ".listcontainer"