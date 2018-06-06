<h1>
    {{#if isNew}}
        {{translate 'Add User Preference'}}
    {{else}}
        {{translate 'Update User Preference'}}
    {{/if}}
</h1>

<form>
    <div data-type="alert-placeholder"></div>

    <fieldset>
        <div data-input="type" data-validation="control-group">
            <label>{{translate 'Type'}}</label>

            <span data-validation="control"></span>
                <select name="type" id="type">
                    {{#each typeOptions}}
                        <option value="{{internalid}}">{{name}}</option>
                    {{/each}}
                </select>
            </span>
        </div>

        <div data-input="type" data-validation="control-group">
            <label>{{translate 'Value'}}</label>

            <span data-validation="control"></span>
                <input type="text" name="value" id="value" value="{{value}}">
            </span>
        </div>
    </fieldset>

    <button type="submit">
        {{#if isNew}}
            {{translate 'Add'}}
        {{else}}
            {{translate 'Update'}}
        {{/if}}
    </button>
</form>