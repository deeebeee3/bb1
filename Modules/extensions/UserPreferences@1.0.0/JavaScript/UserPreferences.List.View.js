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
      /*
      listen for any changes to the collection; if something is added, deleted, 
      changed, etc, then re-render the collection
      */
      var self = this;
      this.collection.on('reset sync add remove change destroy', function() {
        self.render();
      });

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

    events: {
      'click button[data-action="delete"]': 'removeUserPreference'
    },

    removeModel: function (options) {
      var model = options.context.collection.get(options.id);
      model.destroy();
    },

    removeUserPreference: function (e) {
      e.preventDefault();

      var view = new ConfirmationView
      ({
        title: 'Remove Preference'
      , body: 'Are you sure you want to remove this preference?'
      , callBack: this.removeModel
      , callBackParameters:
        {
          context: this
        , id: jQuery(e.target).data('id')
        }
      , autohide: true
      });

      this.application.getLayout().showInModal(view);
    },

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