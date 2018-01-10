imageHelpers = {
    since: () => {
        moment.locale('de');
        return moment(Template.currentData().post.createdAt).fromNow();
    },
    link: () => {
        return '/view?i=' + Template.currentData().post._id;
    },
    file: () => {
        toReturn = Images.findOne({ _id: Template.currentData().post.picture });
        console.log('Image: ', toReturn);
        return toReturn;
    },
    isOwner: () => {
        return Meteor.user()._id == Template.currentData().post.owner;
    }
};

Template.Thumbnail.helpers(imageHelpers);
Template.Viewer.helpers(imageHelpers);

Template.Viewer.onRendered(() => {
    $('.materialboxed').materialbox();
});

Template.ImageContainer.helpers({
    posts: () => {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});