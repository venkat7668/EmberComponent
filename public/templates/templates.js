Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  data.buffer.push(escapeExpression(((helpers['data-table'] || (depth0 && depth0['data-table']) || helperMissing).call(depth0, {"name":"data-table","hash":{
    'delete-row-action': ("deleteRowHandler"),
    'data': ("model")
  },"hashTypes":{'delete-row-action': "STRING",'data': "ID"},"hashContexts":{'delete-row-action': depth0,'data': depth0},"types":[],"contexts":[],"data":data}))));
  },"useData":true});

Ember.TEMPLATES["components/data-table-header"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("	  <div class='col-xs-3'>");
  stack1 = helpers._triageMustache.call(depth0, "column.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div class='row'>\r\n");
  stack1 = helpers.each.call(depth0, "column", "in", "columns", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["components/data-table-row"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "row.edit", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.program(4, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("	<div class=\"col-xs-3\">");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("cell.value"),
    'type': ("text")
  },"hashTypes":{'value': "ID",'type': "STRING"},"hashContexts":{'value': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</div>\r\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("	<div class=\"col-xs-3\">");
  stack1 = helpers._triageMustache.call(depth0, "cell.value", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  data.buffer.push("			<span class=\"glyphicon glyphicon-ok\"></span>\r\n");
  },"8":function(depth0,helpers,partials,data) {
  data.buffer.push("			<span class=\"glyphicon glyphicon-edit\"></span>\r\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  stack1 = helpers.each.call(depth0, "cell", "in", "row", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" <div class='col-xs-3'>\r\n	<span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", "row", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(" class=\"col-xs-3\">\r\n");
  stack1 = helpers['if'].call(depth0, "row.edit", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.program(8, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("	</span>\r\n	<span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "row", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(" class=\"glyphicon glyphicon-trash\"></span>\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["components/data-table"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("		");
  data.buffer.push(escapeExpression(((helpers['data-table-row'] || (depth0 && depth0['data-table-row']) || helperMissing).call(depth0, {"name":"data-table-row","hash":{
    'delete-row-action': ("delete-row-action"),
    'row': ("row")
  },"hashTypes":{'delete-row-action': "ID",'row': "ID"},"hashContexts":{'delete-row-action': depth0,'row': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\r\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class='container'>\r\n    ");
  data.buffer.push(escapeExpression(((helpers['data-table-header'] || (depth0 && depth0['data-table-header']) || helperMissing).call(depth0, {"name":"data-table-header","hash":{
    'columns': ("data.columns")
  },"hashTypes":{'columns': "ID"},"hashContexts":{'columns': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "row", "in", "data.rows", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n\r\n");
  return buffer;
},"useData":true});