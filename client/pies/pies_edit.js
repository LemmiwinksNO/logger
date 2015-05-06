Template.piesEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var properties = {
			body: $(e.target).find('[name=body]').val(),
			mind: $(e.target).find('[name=mind]').val(),
			spirit: $(e.target).find('[name=spirit]').val(),
			emotions: $(e.target).find('[name=emotions]').val(),
			bodyDescription: $(e.target).find('[name=bodyDescription]').val(),
			mindDescription: $(e.target).find('[name=mindDescription]').val(),
			spiritDescription: $(e.target).find('[name=spiritDescription]').val(),
			emotionsDescription: $(e.target).find('[name=emotionsDescription]').val(),
			createdAt: new Date()
		};

		console.log('properties', properties);

		db.piesLogs.insert(properties);
	}
});