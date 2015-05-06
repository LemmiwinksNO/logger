Template.piesItem.helpers({
	date: function() {
		// this = the piesLog!
		if (!this.createdAt) {
			return 'none';
		}

		var year = this.createdAt.getUTCFullYear();
		var month = this.createdAt.getUTCMonth() + 1;
		var day = this.createdAt.getUTCDate();
		return month + '/' + day + '/' + year;
	}
});