// Hier abonniert der Client die Publikationen des Servers

Meteor.subscribe('versions');
Meteor.subscribe('posts');
Meteor.subscribe('images', () => {
    Session.set('imagesLoaded', true);
});