define('requestquote_wizard_permission_error.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"requestquote-wizard-permission-error\"><div class=\"requestquote-wizard-permission-error-header\"><h1 class=\"requestquote-wizard-permission-error-header-title\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + " </h1></div><div class=\"requestquote-wizard-permission-error-message\"><p class=\"requestquote-wizard-permission-error-message-disclaimer\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Sorry, you don't have sufficient permissions to request a quote online. <br/> For immediate assistance <strong>call us at $(0)</strong> or email us to <strong>$(1)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</p><a href=\"/\" data-touchpoint=\"home\" class=\"requestquote-wizard-permission-error-button\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Go to Home Page",{"name":"translate","hash":{},"data":data}))
    + "</a></div></div>  ";
},"useData":true}); template.Name = 'requestquote_wizard_permission_error'; return template;});