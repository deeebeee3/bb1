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
    }
  })
});