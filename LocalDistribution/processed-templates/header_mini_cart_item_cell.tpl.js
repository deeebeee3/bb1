define('header_mini_cart_item_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <li class=\"header-mini-cart-item-cell-product-price\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"rate_formatted") : stack1), depth0))
    + "</li> ";
},"3":function(container,depth0,helpers,partials,data) {
    return " <li> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a data-touchpoint=\"login\" data-hashtag=\"login-register\" origin-hash=\"\" href=\"#\">Login</a> to see price",{"name":"translate","hash":{},"data":data}))
    + " </li> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return " <li class=\"header-mini-cart-item-cell\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-item-type=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemType") || (depth0 != null ? compilerNameLookup(depth0,"itemType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemType","hash":{},"data":data}) : helper)))
    + "\"><a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "><div class=\"header-mini-cart-item-cell-image\"><img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"tinythumb",{"name":"resizeImage","hash":{},"data":data}))
    + "?resizeh=60\" alt=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div></a><div class=\"header-mini-cart-item-cell-details\"><ul><li class=\"header-mini-cart-item-cell-product-title\"><a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " class=\"header-mini-cart-item-cell-title-navigable\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_name") : stack1), depth0))
    + "</a></li> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " <div data-view=\"Item.SelectedOptions\"></div><li class=\"header-mini-cart-item-cell-product-qty\"><span class=\"header-mini-cart-item-cell-quantity-label\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity: ",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"header-mini-cart-item-cell-quantity-value\"> "
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + " </span></li></ul></div></li>  ";
},"useData":true}); template.Name = 'header_mini_cart_item_cell'; return template;});