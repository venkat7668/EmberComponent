App.DataTableComponent = Ember.Component.extend({
	actions:{
		deleteRowHandler:function(row){
			console.log("DATA-TABLE COMPONENT");
			this.sendAction('delete-row-action',row);
		}
	}
});

App.DataTableRowComponent = Ember.Component.extend({
	classNames:['row'],
	actions:{
		delete:function(row){
			console.log("ROW COMPONENT");
			this.sendAction('delete-row-action', row);
		},
		edit:function(row){
			row.toggleProperty('edit');			
		}
	}
});