define([
  'backbone',
  '../collections/StreekEventsCollection'
], function(Backbone,
            StreekEventsCollection) {

  var StreekModel = Backbone.Model.extend({
    idAttribute : '_id',

    name : String,
    slug : String,

    events: StreekEventsCollection,

    parse: function(response){
      // Set the StreekModel level data on each event
      for (var i = 0, collectionLength = response.events.length; i < collectionLength; i++) {
        streekEvent = response.events[i];
        streekEvent.slug = response.slug;
        streekEvent.color = response.color;
      };

      if (typeof response.events !== 'undefined') { response.events = new StreekEventsCollection(response.events, { parse: true }); }

      return response;
    }
  });

  return StreekModel;
});