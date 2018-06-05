define('UserPreferences.Edit.View'
, [
    'Backbone'
  , 'Backbone.FormView'
  , 'underscore'
  , 'user_preferences_edit.tpl'
  ]
, function
  (
    Backbone
  , FormView
  , _
  , user_preferences_edit_tpl
  )
{
  'use strict';

  return Backbone.View.extend({
    template: user_preferences_edit_tpl

  , events:
    {
      'submit form': 'saveForm'
    }

  , initialize: function (options)
    {
      this.model = options.model;
      this.application = options.application;
      FormView.add(this);
    }

  , typeOptions: function ()
    {
      var options = [
        {internalid: 1, name: _.translate('Color'), isSelected: (this.model.get('type') == 'Color')}
      , {internalid: 2, name: _.translate('Size'), isSelected: (this.model.get('type') == 'Size')}
      ]

      return options
    }

  , getContext: function ()
    {
      return {
        typeOptions: this.typeOptions(), 
        type: this.model.get('type'), 
        value: this.model.get('value'),
        isNew: this.model.isNew()
      }
    }
  })
});