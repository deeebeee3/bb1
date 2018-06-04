define('order_wizard_msr_package_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"3":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Items",(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"translate","hash":{},"data":data}))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Item",{"name":"translate","hash":{},"data":data}))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"order-wizard-msr-package-details\"><div class=\"order-wizard-msr-package-details-accordion-divider\"><div class=\"order-wizard-msr-package-details-accordion-head\"><a class=\"order-wizard-msr-package-details-accordion-head-toggle-secondary "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#package-details-products-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"package-details-products-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-wizard-msr-package-details-accordion-head-title-container\"><span class=\"order-wizard-msr-package-details-accordion-head-address-name\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressName") || (depth0 != null ? compilerNameLookup(depth0,"addressName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressName","hash":{},"data":data}) : helper)))
    + " </span><i class=\"order-wizard-msr-package-details-accordion-toggle-icon-secondary\"></i><span class=\"order-wizard-msr-package-details-accordion-head-count\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemCountGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " </span></div><p class=\"order-wizard-msr-package-details-accordion-head-address\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"address") || (depth0 != null ? compilerNameLookup(depth0,"address") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + " </p></a></div><div class=\"order-wizard-msr-package-details-accordion-body collapse\" id=\"package-details-products-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" role=\"tabpanel\" data-target=\"#package-details-products-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-wizard-msr-package-details-accordion-container\" data-content=\"order-items-body\"><div class=\"order-wizard-msr-package-details-row-fluid\" data-type=\"package\" ><div data-type=\"package-style\" class=\"order-wizard-msr-package-details-multishipto-package\"><div><div class=\"order-wizard-msr-package-details-address-container\" data-type=\"address-container\"><div class=\"order-wizard-msr-package-details-address-container-addresses\"><div data-view=\"Address.Details\" class=\"order-wizard-msr-package-details-address-card\"></div></div></div><div class=\"order-wizard-msr-package-details-address-items-container\" data-type=\"accordion\"><table><tbody class=\"order-wizard-msr-package-details-actionable-table\" data-view=\"Items.Collection\"></tbody></table></div></div></div></div></div></div></div></div>  ";
},"useData":true}); template.Name = 'order_wizard_msr_package_details'; return template;});