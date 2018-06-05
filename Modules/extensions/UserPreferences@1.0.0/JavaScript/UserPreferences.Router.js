define('UserPreferences.Router'
, [
    'Backbone',
    'UserPreferences.List.View',
    'UserPreferences.Collection',
    'UserPreferences.Model'
  ]
, function
  (
    Backbone, 
    UserPreferencesListView,
    UserPreferencesCollection,
    UserPreferencesModel
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
    },

    preferencesAdd: function ()
    {
      /* when a user visits preferences/add, it'll be called. It'll create a new model and 
      add some dummy data to it, and then it'll run its save method. This method is built into 
      Backbone and our application to trigger the service specified in the model we specified. */
     
      var model = new UserPreferencesModel();

      model.set('type', 1);
      model.set('value', 'Orange');

      model.save();
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