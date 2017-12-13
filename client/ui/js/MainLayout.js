Template.MainLayout.helpers({
    username: () => {
        if(Meteor.user() && Meteor.user().username) {
            return Meteor.user().username;
        } else if(Meteor.user() && Meteor.user().profile) {
            return Meteor.user().profile.name;
        } else {
            return 'Gast';
        }
    }
});