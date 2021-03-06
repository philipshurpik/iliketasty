Session.setDefault('headerState', { back: false, backPage: "", text: "Categories", isTransparent: false });

Meteor.startup(function () {
    document.addEventListener("deviceready", function() {
        if (window.device && window.device.platform) {
            Session.set('platform', window.device.platform.toLowerCase());
        }
    });
});

Template.main.rendered = function() {
    /*this.find('#content')._uihooks = {
        insertElement: function(node, next) {
            if ($(node).hasClass('page-animate')) {
                $(node).insertBefore(next);
                setTimeout(function() {
                    $(node).removeClass('page-animate-start');
                }, 10);
            }
            else {
                $(node).hide().insertBefore(next).fadeIn(function () {});
            }
        },
        removeElement: function(node) {
            if ($(node).hasClass('page-animate')) {
                $(node).css('z-index', 1000).addClass('page-animate-start');
                setTimeout(function() {
                    $(node).remove();
                }, 300);
            }
            else {
                $(node).fadeOut(function() { $(this).remove(); });
            }
        }
    };*/
};

Template.main.helpers({
    cordova: function() {
        return Meteor.isCordova && 'cordova';
    },
    platform: function() {
        return Session.get('platform');
    },
    headerTransparent: function() {
        return Session.get('headerState').isTransparent && 'header-transparent';
    },
    headerState: function() {
        return Session.get('headerState');
    },
    activePageCategories: function() {
        var page = Session.get('activePage');
        return (page === 'categories' || page === 'categoryPage'|| page === 'recipePage' || page === 'stepPage') && 'active';
    },
    activePageAuth: function() {
        var page = Session.get('activePage');
        return (page === 'signinPage' || page === 'joinPage'  || page === 'authPage') && 'active';
    },
    activePageProfile: function() {
        return Session.get('activePage') === 'profilePage' && 'active';
    },

    tabTimerHidden: function() {
        return !Session.get('activeTimer') && 'tab-timer-hidden';
    },

    activeTimerTime: function() {
        return Session.get('activeTimer');
    }

});

Template.main.events({
    'click .pull-left': function() {
        var headerState = Session.get('headerState');
        if (!headerState.backPage && headerState.back === true) {
            console.log('back');
            history.back();
        }
    }
});