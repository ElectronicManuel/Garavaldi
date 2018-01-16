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
    },
    isOwner: () => {
        return Meteor.user()._id == Template.currentData().post.owner;
    },
    likes: () => {
        var post = Template.currentData().post;
        if(post && post.likes) {
            return post.likes.length;
        }
        return 0;
    }
};

Template.Thumbnail.helpers(imageHelpers);
Template.Viewer.helpers(imageHelpers);

Template.Viewer.onRendered(() => {
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip({ delay: 50 });
});

Template.ImageContainer.helpers({
    posts: () => {
        return Posts.find({}, { sort: { createdAt: -1 } });
    }
});

Template.Viewer.events({
    'click .delete': (e) => {
        e.preventDefault();

        var postId = Template.currentData().post._id;
        var pictureId = Template.currentData().post.picture;

        swal({
            title: 'Bist du sicher?',
            text: 'Du kannst das Löschen nicht rückgängig machen',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ja, löschen',
            cancelButtonText: 'Nein',
            dangerMode: true
        }).then(function (returned) {
            if(returned.value) {
                Images.remove({ _id: pictureId }, function (error) {
                    if (error) {
                        swal('Fehler', 'Fehler beim löschen: ' + error.reason, 'error');
                    } else {
                        Posts.remove({ _id: postId }, function (error) {
                            if (error) {
                                swal('Fehler', 'Fehler beim löschen: ' + error.reason, 'error');
                            } else {
                                FlowRouter.go('/', null, null);
                                swal('Gelöscht!', 'Post erfolgreich gelöscht', 'success');
                            }
                        });
                    }
                });
            }
        });
    },
    'click .changelock': (e) => {
        var postId = Template.currentData().post._id;
        var postPrivate = Template.currentData().post.private;
        Posts.update({ _id: postId }, { $set: { private: !postPrivate }}, () => {
            $('.tooltipped').tooltip({ delay: 50 });
        });
    }
});