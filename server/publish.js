Meteor.publish('medias', () => {
    return Medias.find({});
});