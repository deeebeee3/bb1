define('UserPreferences.List.View'
, [
    'Backbone'
  , 'user_preferences_list.tpl'
  ]
, function
  (
    Backbone
  , user_preferences_list_tpl
  )
{
  'use strict';

  return Backbone.View.extend({
    template: user_preferences_list_tpl, 
    
    /*A view/template's context is an object that contains all of the values that we want to 
    pass from a view to a template. They can be the results of complex functions, data values, 
    or (in our case) simple text messages.*/
    
    getContext: function ()
    {
      return {
        message: 'Hello world! 🌍👋'
      }
    }
  })
});