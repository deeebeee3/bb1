define('UserPreferences.List.View'
, [
    'Backbone'
  , 'user_preferences_list.tpl'
  , 'Backbone.CollectionView'
  , 'UserPreferences.Details.View'
  ]
, function
  (
    Backbone
  , user_preferences_list_tpl
  , CollectionView
  , UserPreferencesDetailsView
  )
{
  'use strict';

  return Backbone.View.extend({
    template: user_preferences_list_tpl, 

    initialize: function (options)
    {
      this.application = options.application
    , this.collection = options.collection
    },
    
    /*A view/template's context is an object that contains all of the values that we want to 
    pass from a view to a template. They can be the results of complex functions, data values, 
    or (in our case) simple text messages.*/
    
    // getContext: function ()
    // {
    //   return {
    //     message: 'Hello world! 🌍👋'
    //   }
    // },

    childViews:{
      'UserPreferences.Collection': function ()
      {
        return new CollectionView({
          'childView': UserPreferencesDetailsView
        , 'collection': this.collection
        , 'viewsPerRow': 1
        })
      }
    }

  })
});