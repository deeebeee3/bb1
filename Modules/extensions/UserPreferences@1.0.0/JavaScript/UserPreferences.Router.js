define('UserPreferences.Router'
, [
    'Backbone',
    'UserPreferences.List.View',
    'UserPreferences.Collection'
  ]
, function
  (
    Backbone, 
    UserPreferencesListView,
    UserPreferencesCollection
  )
{
  'use strict';

  return Backbone.Router.extend({
    routes: {
      'preferences': 'preferencesList', 
      'preferences/add': 'preferencesAdd', 
      'preferences/:id': 'preferencesEdit'
    }, 
    
    initialize: function (application) {
      this.application = application
    }, 
    
    preferencesList: function () {
      var collection = new UserPreferencesCollection();
      var view = new UserPreferencesListView
      ({
        application: this.application,
        collection: collection
      });

      collection.fetch().done(function ()
      {
        view.showContent();
      });
    }

  });
});

/*
The preferences route is called by the visitor, triggering the preferencesList function
The function calls the fetch method on the collection
The collection triggers a call to the service via the URL
The service calls the service controller
The service controller calls the get method on the backend model
The backend model returns our dummy data
*/