<section class="user-preferences-edit">
    <header class="user-preferences-edit-header">
        <h1>
            {{#if isNew}}
                {{translate 'Add User Preference'}}
            {{else}}
                {{translate 'Update User Preference'}}
            {{/if}}
        </h1>
    </header>
    
    <form>
        <div data-type="alert-placeholder"></div>
        <fieldset>
            <small>Required <span class="user-preferences-edit-required">*</span></small>
            <div class="user-preferences-edit-control-group" data-input="type" data-validation="control-group">
                <label class="user-preferences-edit-label" for="type">
                    {{translate 'Type'}}
                    <small><span class="user-preferences-edit-required">*</span></small>
                </label>
                <span data-validation="control">
                    <select class="user-preferences-edit-select" name="type" id="type">
                        {{#each typeOptions}}
                            <option value="{{internalid}}">{{name}}</option>
                        {{/each}}
                    </select>
                </span>
            </div>

            <div class="user-preferences-edit-control-group" data-input="value" data-validation="control-group">
                <label class="user-preferences-edit-label" for="value">
                    {{translate 'Value'}}
                    <small><span class="user-preferences-edit-required">*</span></small>
                </label>
                <span data-validation="control">
                    <input class="user-preferences-edit-input" type="text" name="value" id="value" value="{{value}}">
                </span>
            </div>
        </fieldset>
        <div class="user-preferences-edit-control-group">
            <button class="user-preferences-edit-submit" type="submit">
                {{#if isNew}}
                    {{translate 'Add'}}
                {{else}}
                    {{translate 'Update'}}
                {{/if}}
            </button>
        </div>
    </form>
    
</section>