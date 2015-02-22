Template.profilePage.rendered = function() {
    Session.set('headerState', { text: "Profile" });
};
Template.profilePage.events({
    'click .text-logout': function() {
        Meteor.logout();
        Router.go('authPage');
    }
});
Template.profilePage.helpers({
    name: function() {
       return Meteor.user().profile.name;
    }
});