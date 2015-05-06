Template.piesList.helpers({
	piesLogs: function() {
		return db.piesLogs.find()
	}
});
