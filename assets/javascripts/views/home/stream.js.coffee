class K.Views.Home.Stream extends Backbone.Marionette.CompositeView
  itemView: K.Views.Home.Item 
  template: """
    <div class="listcontainer">
    </div>
    <div class="paging">
      <a href=" "> Next Page </a>
    </div>
  """
  events:
    "click .paging a":"loadNextPage"

  loadNextPage: (e) =>
    e.preventDefault()
    # insert a containe div if the last one is non empty
    if @$(".listcontainer").last().find(">div").length > 0
      @$(".listcontainer").last().after("<div class='listcontainer' style='opacity: 0'></div>")
    @collection.loadNextPage()
    humane.log("Loading...")
  
  appendHtml: (vc, itemView, index) =>
    # let's get the last container div
    $cont = @$(".listcontainer").last()
    # appendChild is faster the jquery append http://jsperf.com/document-fragment-vs-html-element-append
    $cont[0].appendChild itemView.$el[0]
    if (index + 1) is @collection.length
      setTimeout(
        () => $cont.css({opacity: 1})
        20
      )

