Template.joinPage.rendered = function() {
    Session.set('headerState', { text: "", back: true });
};
Template.joinPage.events({
    'submit': function(event) {
        event.preventDefault();
        var form = event.target;
        var email = form.email.value;
        var password = form.password.value;
//        var confirm = form.confirm.value;
//        var name = form.name.value;
        var error = "";
        if (!email || email.length < 7) {
            error = "Correct email is required";
            Session.set('joinPageErrors', error);
            return;
        }
        if (!password || password.length < 6) {
            error = "Password (at least 6 symbols) is required";
            Session.set('joinPageErrors', error);
            return;
        }
        Accounts.createUser({
            username: email,
            email: email,
            password: password,
            profile: {
                email: email,
                name: email,
                notifications: true
            }
        }, function(error) {
            if (error) {
                return Session.set('joinPageErrors', error.reason);
            }
            Router.go('/');
        });
    }
});