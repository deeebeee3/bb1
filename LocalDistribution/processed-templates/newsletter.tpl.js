define('newsletter.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "error";
},"3":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"GlobalMessageFeedback\"></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <form class=\"newsletter-suscription-form\" data-action=\"newsletter-subscribe\" novalidate><div data-validation=\"control-group\"><h5 class=\"newsletter-subscription-form-label\" for=\"login-email\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Newsletter Sign Up",{"name":"translate","hash":{},"data":data}))
    + "</h5><div class=\"newsletter-subscription-form-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-validation=\"control\"><input\n				name=\"email\"\n				id=\"email\"\n				type=\"email\"\n				class=\"newsletter-suscription-form-input\"\n				placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"username@domain.com",{"name":"translate","hash":{},"data":data}))
    + "\"\n			><button type=\"submit\" class=\"newsletter-subscription-form-button-subscribe\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Subscribe",{"name":"translate","hash":{},"data":data}))
    + " </button><div class=\"newsletter-alert-placeholder\" data-type=\"alert-placeholder\" > "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div></form>  ";
},"useData":true}); template.Name = 'newsletter'; return template;});