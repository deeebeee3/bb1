define('UserPreferences.Router'
, [
    'Backbone',
    'UserPreferences.List.View',
    'UserPreferences.Collection',
    'UserPreferences.Model',
    'UserPreferences.Edit.View'
  ]
, function
  (
    Backbone, 
    UserPreferencesListView,
    UserPreferencesCollection,
    UserPreferencesModel,
    UserPreferencesEditView
  )
{
  'use strict';

  return Backbone.Router.extend({
    routes: {
      'preferences': 'preferencesList', 
      'preferences/add': 'preferencesEdit', 
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

    preferencesEdit: function (id) {
      var model = new UserPreferencesModel();
      var promise = jQuery.Deferred();
      var application = this.application;

      if (!id) {promise.resolve()}
      else
      {
        model.fetch({data: {internalid: id}})
        .done(function () {promise.resolve();});
      }

      promise.done(function ()
      {
        var view = new UserPreferencesEditView
        ({
          application: application
        , model: model
        });

        view.showContent();
        view.model.on('sync', function (model)
        {
          Backbone.history.navigate('preferences', {trigger: true});
        });
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