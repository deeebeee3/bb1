<section class="user-preferences-list">
    <header class="user-preferences-list-header">
        <h1 class="user-preferences-list-title">{{translate 'User Preferences'}}</h1>
        <!--<h3>{{message}}</h3>-->
        <a class="user-preferences-list-button-new" href="/preferences/add">{{translate 'Add New'}}</a>
    </header>
    <table class="user-preferences-list-table">
        <thead class="user-preferences-list-table-header">
          <tr>
              <th class="user-preferences-list-table-header-id">{{translate 'Internal ID'}}</th>
              <th class="user-preferences-list-table-header-type">{{translate 'Type'}}</th>
              <th class="user-preferences-list-table-header-value">{{translate 'Value'}}</th>
              <th class="user-preferences-list-table-header-actions" colspan="2">{{translate 'Actions'}}</th>
          </tr>
        </thead>
        <tbody data-view="UserPreferences.Collection"></tbody>
    </table>
</section>

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