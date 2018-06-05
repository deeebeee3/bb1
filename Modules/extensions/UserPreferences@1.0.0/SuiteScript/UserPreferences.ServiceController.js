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
    name: 'UserPreferences.ServiceController', 
    
    get: function ()
    {
      var id = this.request.getParameter('internalid');
      return id ? UserPreferencesModel.get(id) : UserPreferencesModel.list()
    },

    post: function()
    {
      /* Send content to the server using the create method of the UserPreferences model, 
      with this data. Afterwards, return the 'created' HTTP code.*/
      
      this.sendContent(UserPreferencesModel.create(this.data), {'status': 201});
    },

    put: function ()
    {
      var id = this.request.getParameter('internalid');
      UserPreferencesModel.update(id, this.data);
      return UserPreferencesModel.get(id);
    }

  });
});