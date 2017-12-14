Meteor.subscribe('medias');

Template.HomeLayout.helpers({
    medias: () => {
        return Medias.find({});
    }
});