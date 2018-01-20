Meteor.subscribe('posts');
Meteor.subscribe('images', () => {
    Session.set('imagesLoaded', true);
});