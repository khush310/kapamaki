class K.Stream extends Backbone.Collection
  loadNextPage: ( ) =>
    if @owner_id is "me"
      url = '/me/home'
    else
      url = '/' + @owner_id + '/feed'
    FB.api url, {until: @until}, (response) =>
      if response.error
      else
        console.log response.data 
        console.log response.paging
        @add response.data
        if response.paging?.next then @until = response.paging.next.match(/until=(.*)/)[1]

  initialize: (models, options) =>
    console.log options
    @owner_id = options.owner_id
 