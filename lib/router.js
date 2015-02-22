Router.configure({
	layoutTemplate: 'main',
	loadingTemplate: 'loading',
	waitOn: function() {
		return [
			Meteor.subscribe('Likes'),
            Meteor.subscribe('Timers')
		];
	}
});

Router.map(function() {
	this.route('/', {
        name:'categories'
    });
    this.route('/categories/:_id', {
        name:'categoryPage',
        data: function() {
            return Categories.findOne(this.params._id);
        }
    });
	this.route('/recipe/:_id', {
		name: 'recipePage',
        data: function() {
            return Recipes.findOne(this.params._id);
        }
	});
    this.route('/recipe-steps/:_id', {
        name: 'stepPage',
        data: function() {
            return Recipes.findOne(this.params._id);
        }
    });

    this.route('/auth', {
        name: 'authPage'
    });
    this.route('/signin', {
        name: 'signinPage'
    });
    this.route('/join', {
        name: 'joinPage'
    });

	this.route('/basket', {
        name:'basketPage'
    });

    this.route('/profilePage', {
        name: 'profilePage'
    });

    this.route('/shopCard', {
        name: 'shopCard'
    });
});

if (Meteor.isClient) {
    Router.onBeforeAction('loading', {except: ['joinPage', 'signinPage']});
    Router.onBeforeAction(function() {
        Session.set('activePage', Router.current().route.getName());
        this.next();
    });
}

