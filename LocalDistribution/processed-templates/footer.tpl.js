define('footer.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <ul class=\"footer-content-nav-list\"> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"footerNavigationLinks") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul> ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data}))
    + "> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " </a></li> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div data-view=\"Global.BackToTop\"></div><div class=\"footer-content\"><div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\" data-cms-area-filters=\"global\"></div><div class=\"footer-content-nav\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFooterNavigationLinks") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"footer-content-right\"><div data-view=\"FooterContent\"></div><div class=\"footer-content-copyright\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"&copy; 2008-2015 Company Name",{"name":"translate","hash":{},"data":data}))
    + " </div></div></div>  ";
},"useData":true}); template.Name = 'footer'; return template;});