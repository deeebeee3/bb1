/* 
So to 'define' the module, we use the along with a name, followed by an array of dependencies 
(none, currently, in our case), and then the code we want the entry point to run. In this file, 
we're keeping it extremely simple by merely logging a simple statement to the developer console 
when the module is mounted to the application.
*/

define('UserPreferences'
, []
, function
  ()
{
  'use strict';

  return {
    mountToApp: function ()
    {
      console.log('Hello World! UserPreferences calling!');
    }
  }
});