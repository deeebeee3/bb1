<h1>{{translate 'User Preferences'}}</h1>
<!--<h3>{{message}}</h3>-->
<table>
    <thead>
      <tr>
          <th>{{translate 'Internal ID'}}</th>
          <th>{{translate 'Type'}}</th>
          <th>{{translate 'Value'}}</th>
          <th>{{translate 'Actions'}}</th>
      </tr>
    </thead>
    <tbody data-view="UserPreferences.Collection"></tbody>
</table>

<!--
The first is the {{translate}} helper. SuiteCommerce sites support multiple languages and it works 
by keeping dictionaries of base strings and their translated values. Using this helper, you pass 
it the string you want to use and it looks up a translation in the user's selected language; if 
one is found then it is returned, otherwise the original string is used instead. Thus, if you're 
not using multiple languages, you don't have to do this: you can just put plain text into your 
templates, but we consider it good practice to do this anyway (in case you plan to go multi-lang 
in the future.

An alternative to this would be to set all the strings in the view (using _.translate()) and pass 
them to the template like we did with our 'hello world' message.
-->