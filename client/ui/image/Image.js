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
        return toReturn;
    }
};

Template.Thumbnail.helpers(imageHelpers);
Template.Viewer.helpers(imageHelpers);

Template.Viewer.onRendered(() => {
    $('.materialboxed').materialbox();
});