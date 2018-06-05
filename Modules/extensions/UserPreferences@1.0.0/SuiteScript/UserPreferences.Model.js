define('UserPreferences.Model'
, [
    'SC.Model'
  ]
, function
  (
    SCModel
  )
{
  'use strict';

  return SCModel.extend({
    name: 'UserPreferences', 
    
    list: function ()
    {
      /* 
      type: the internal ID of the record type we want to perform a search on
      id: the internal ID of the saved search (we're not using a saved search, so we can ignore this)
      filters: an object or array of objects that reduce down the number of results returned 
        (eg, we're going to specify an owner so we only get the records the current user owns)
      columns: an object or array of objects specifying which parts (ie fields) of the returned records we want
      */
      var type = 'customrecord_user_preferences';

      var filters = [
        new nlobjSearchFilter('custrecord_user_preferences_owner', null, 'anyof', nlapiGetUser())
      ];

      var columns = [
        new nlobjSearchColumn('internalid')
      , new nlobjSearchColumn('custrecord_user_preferences_type')
      , new nlobjSearchColumn('custrecord_user_preferences_value')
      ];

      /*Perform a search on user preferences records, filtering for ones that the current 
      user owns, returning to me only the internal ID, type (ie color or size) and value 
      of that type (eg orange)*/
      
      var search = nlapiSearchRecord(type, null, filters, columns);

      return _.map(search, function (result) {
        return {
          internalid: result.getValue('internalid')
        , type: result.getText('custrecord_user_preferences_type')
        , value: result.getValue('custrecord_user_preferences_value')
        };
      });
    },

    create: function (data)
    {
      var newRecord = nlapiCreateRecord('customrecord_user_preferences');

      newRecord.setFieldValue('custrecord_user_preferences_owner', nlapiGetUser());
      newRecord.setFieldValue('custrecord_user_preferences_type', data.type);
      newRecord.setFieldValue('custrecord_user_preferences_value', data.value);

      return nlapiSubmitRecord(newRecord);
    }

  });
});