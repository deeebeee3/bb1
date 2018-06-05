define('UserPreferences.Details.View'
, [
    'Backbone'
  , 'user_preferences_details.tpl'
  ]
, function
  (
    Backbone
  , user_preferences_details_tpl
  )
{
  'use strict';

  return Backbone.View.extend({
    template: user_preferences_details_tpl

  , getContext: function ()
    {
      return {
        'internalid': this.model.get('internalid')
      , 'type': this.model.get('type')
      , 'value': this.model.get('value')
      }
    }
  })
});