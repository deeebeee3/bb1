/**
 * extend a base collection class and then do two things:
 *  1) Specify the model to use
 *  2) Point to the service where the data will come from / go to
 */

 define('UserPreferences.Collection'
, [
    'Backbone'
  , 'UserPreferences.Model'
  , 'underscore'
  ]
, function
  (
    Backbone
  , UserPreferencesModel
  , _
  )
{
  'use strict';

  return Backbone.Collection.extend({
    model: UserPreferencesModel
  , url: _.getAbsoluteUrl('services/UserPreferences.Service.ss')
  });
});