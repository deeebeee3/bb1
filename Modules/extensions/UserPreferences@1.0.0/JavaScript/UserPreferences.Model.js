/*
our functionality needs a collection because we're going to be offering list 
functionality for our records. The collection takes the data and then pumps out the below 
frontend model for each one.
*/

define('UserPreferences.Model'
, [
    'underscore',
    'Backbone'
  ]
, function
  (
    _
  ,  Backbone
  )
{
  'use strict';

  return Backbone.Model.extend({

    urlRoot: _.getAbsoluteUrl('services/UserPreferences.Service.ss'),

    validation: {
      'type':
      {
        required: true
      , msg: 'Please select a type'
      }
    , 'value':
      {
        required: true
      , msg: 'Please enter a value'
      }
    }

  });
});