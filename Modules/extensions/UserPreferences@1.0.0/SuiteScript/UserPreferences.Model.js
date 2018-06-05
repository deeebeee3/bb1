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
    
    list: function (){
      return [
        {internalid: 1, type: 'Color', value: '7'}
      , {internalid: 2, type: 'Size', value: '5'}
      ]
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