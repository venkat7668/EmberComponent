App.ApplicationRoute = Ember.Route.extend({
	model:function(){
		return {
			columns:[{title:"COLUMN-1"},{title:"COLUMN-2"},{title:"COLUMN-3"},{title:"COLUMN-4"}],
			rows:   [
						[{value:"Value-1"},{value:"Value-2"},{value:"Value-3"}],
						[{value:"Value-1"},{value:"Value-2"},{value:"Value-3"}],
						[{value:"Value-1"},{value:"Value-2"},{value:"Value-3"}],
						[{value:"Value-1"},{value:"Value-2"},{value:"Value-3"}],
						[{value:"Value-1"},{value:"Value-2"},{value:"Value-3"}]
					]
		}
	}
});

App.ApplicationController = Ember.Controller.extend({
  actions:{
	  deleteRowHandler:function(row){
		  console.log("Row has been deleted"); 
		  var rows = this.get('model').rows;
		  rows.removeAt(rows.indexOf(row));
	  }
  }
});