Template.recipePage.rendered = function() {
    Session.set('headerState', { text: "Recipe", back: true });
};
Template.recipePage.events({
    'click .btn-start': function() {
        Router.go('stepPage', {_id: this._id});
    }
});
Template.recipePage.helpers({
    isOwner: function() {
        return this.owner === Meteor.userId();
    },
    showDrive: function() {
        return this.isDrive;
    },
    showBank: function() {
        return this.isBank;
    },
    type: function() {
        return this.type === "sell" ? "Покупка" : "Продажа";
    },
    amount: function() {
        return ("" + this.amount).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function($1) {
            return $1 + " ";
        });
    }
});