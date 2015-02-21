Template.board.rendered = function() {
    Session.set('headerState', { text: "Все заявки", settings: true });
};
Template.board.helpers({
    activeCity: function() {
        return Meteor.user().profile.city;
    },
    activeCount: function() {
        return Orders.find({
            checked: {$ne: true},
            type: Session.get('activeBoardType'),
            currency: Session.get('activeBoardCurrency') !== "all" ? Session.get('activeBoardCurrency') : {$exists: true}
        }).count();
    },
    orders: function() {
        return Orders.find({
            checked: {$ne: true},
            type: Session.get('activeBoardType'),
            currency: Session.get('activeBoardCurrency') !== "all" ? Session.get('activeBoardCurrency') : {$exists: true}
        }, {sort: {createdAt: -1, amount: -1}});
    },
    activeStatusText: function() {
        return Session.get('activeBoardType') === "buy" ? "на покупку" : "на продажу";
    },
    typeBuyActive: function() {
        return Session.get('activeBoardType') === "buy" && "active";
    },
    typeSellActive: function() {
        return Session.get('activeBoardType') === "sell" && "active";
    },
    currencyUsdActive: function() {
        return Session.get('activeBoardCurrency') === "usd" && "active";
    },
    currencyEurActive: function() {
        return Session.get('activeBoardCurrency') === "eur" && "active";
    },
    currencyAllActive: function() {
        return Session.get('activeBoardCurrency') === "all" && "active";
    }
});
Template.board.events({
    'click .filter-type .control-item': function(event) {
        var target = $(event.target);
        Session.set('activeBoardType', target.data('id'));
    },
    'click .filter-currency .control-item': function() {
        var target = $(event.target);
        Session.set('activeBoardCurrency', target.data('id'));
    }
});