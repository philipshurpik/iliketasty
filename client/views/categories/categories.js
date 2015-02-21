Template.categories.rendered = function() {
	Session.set('headerState', {
		text: "Categories"
	});
};
Template.categories.helpers({
	categoriesList: function() {
		return Categories.find({}, {
			sort: {
				index: 1
			}
		});
	}
});