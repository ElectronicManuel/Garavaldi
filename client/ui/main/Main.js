Template.MainLayout.helpers({
    loginLoading: () => {
        return AccountsTemplates.disabled();
    }
});

Template.registerHelper('imagesLoaded', () => {
    return Session.get('imagesLoaded');
});

Template.registerHelper('routeEquals', (routeName) => {
    return FlowRouter.getRouteName() == routeName;
});

Template.registerHelper('postSince', () => {
    moment.locale('de');
    return moment(Template.currentData().post.createdAt).fromNow();
});

Template.registerHelper('postLink', () => {
    return '/view?i=' + Template.currentData().post._id;
});

Template.registerHelper('postFile', () => {
    toReturn = Images.findOne({ _id: Template.currentData().post.picture });
    return toReturn;
});

Template.registerHelper('postIsOwner', () => {
    return Meteor.userId() == Template.currentData().post.owner;
});

Template.registerHelper('postLikes', () => {
    var post = Template.currentData().post;
    if (post && post.likes) {
        return post.likes.length;
    }
    return 0;
});

Template.registerHelper('postHasLiked', () => {
    var post = Template.currentData().post;
    if (post && post.likes) {
        return post.likes.indexOf(Meteor.userId()) > -1;
    }
    return false;
});