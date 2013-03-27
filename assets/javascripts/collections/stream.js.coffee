class K.Stream extends Backbone.Collection
  loadNextPage: ( ) =>
    FB.api '/me/home', {until: @until}, (response) =>
      console.log response.paging
      console.log response.data
      @add response.data
      @until = response.paging.next.match(/until=(.*)/)[1]