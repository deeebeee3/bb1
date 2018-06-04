define('UserPreferences.ServiceController'
, [
    'ServiceController'
  , 'UserPreferences.Model'
  ]
, function
  (
    ServiceController
  , UserPreferencesModel
  )
{
  'use strict';

  return ServiceController.extend({
    name: 'UserPreferences.ServiceController'

  , get: function ()
    {
      var id = this.request.getParameter('internalid');
      return id ? UserPreferencesModel.get(id) : UserPreferencesModel.list()
    }
  })
});