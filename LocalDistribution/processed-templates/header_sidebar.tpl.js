define('header_sidebar.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <li class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"last")),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </li> ";
},"3":function(container,depth0,helpers,partials,data) {
    return "header-sidebar-menu-lastoption";
},"5":function(container,depth0,helpers,partials,data) {
    return "data-action=\"push-menu\"";
},"7":function(container,depth0,helpers,partials,data) {
    return "<i class=\"header-sidebar-menu-push-icon\"></i>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <ul><li><a href=\"#\" class=\"header-sidebar-menu-back\" data-action=\"pop-menu\" name=\"back-sidebar\"><i class=\"header-sidebar-menu-pop-icon\"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data}))
    + "> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Browse $(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </a></li> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul> ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </li> ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <ul><li><a href=\"#\" class=\"header-sidebar-menu-back\" data-action=\"pop-menu\"><i class=\"header-sidebar-menu-pop-icon\"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data}))
    + "> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Browse $(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </a></li> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul> ";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data}))
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a></li> ";
},"14":function(container,depth0,helpers,partials,data) {
    return " <li class=\"header-sidebar-menu-myaccount\" data-view=\"Header.Menu.MyAccount\"></li> ";
},"16":function(container,depth0,helpers,partials,data) {
    return " <a class=\"header-sidebar-user-logout\" href=\"#\" data-touchpoint=\"logout\" name=\"logout\"><i class=\"header-sidebar-user-logout-icon\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Sign Out",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"18":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"Global.HostSelector\"></div> ";
},"20":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"Global.CurrencySelector\"></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"header-sidebar-wrapper\"><div data-view=\"Header.Profile\"></div><div class=\"header-sidebar-menu-wrapper\" data-type=\"header-sidebar-menu\"><ul class=\"header-sidebar-menu\"> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <li class=\"header-sidebar-menu-separator\"></li> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <li data-view=\"QuickOrderHeaderLink\"></li><li data-view=\"RequestQuoteWizardHeaderLink\"></li></ul></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>  ";
},"useData":true}); template.Name = 'header_sidebar'; return template;});