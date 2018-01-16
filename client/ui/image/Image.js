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
        return Meteor.userId() == Template.currentData().post.owner;
    },
    likes: () => {
        var post = Template.currentData().post;
        if (post && post.likes) {
            return post.likes.length;
        }
        return 0;
    },
    hasLiked: () => {
        var post = Template.currentData().post;
        if (post && post.likes) {
            return post.likes.indexOf(Meteor.userId()) > -1;
        }
        return false;
    }
};

Template.Thumbnail.helpers(imageHelpers);
Template.Viewer.helpers(imageHelpers);

Template.Viewer.onRendered(() => {
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip({ delay: 50 });
    $('main').addClass('viewer');
});

Template.Viewer.onDestroyed(() => {
    $('main').removeClass('viewer');
});

Template.ImageContainer.helpers({
    posts: () => {
        var sortObject = Session.get('sort');
        var actualSort = {};

        for (var key in sortObject) {
            if (sortObject.hasOwnProperty(key)) {
                var setting = sortObject[key]; // Since dynamic, use []
                if (setting != 0) {
                    actualSort[key] = setting;
                }
            }
        
        }

        console.log(sortObject);
        console.log(actualSort);

        var toReturn = Posts.find({}, { sort: actualSort });
        $('.tooltipped').tooltip({ delay: 50 });
        return toReturn;
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
            if (returned.value) {
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
        Posts.update({ _id: postId }, { $set: { private: !postPrivate } }, () => {
            $('.tooltipped').tooltip({ delay: 50 });
        });
    },
    'click .likeBtn': (e) => {
        var postId = Template.currentData().post._id;
        var hasLiked = Template.Viewer.__helpers.get('hasLiked').call();
        if (!hasLiked) {
            Meteor.call('posts.like', { postId: postId, userId: Meteor.userId() }, (err, res) => {
                if (err) {
                    if (err.error && typeof err.error == 'string' && err.error.indexOf('posts.like') > -1) {
                        swal('Ups', err.reason, 'warning');
                    } else {
                        swal('Fehler', err.message, 'error');
                    }
                }

            });
        } else {
            Meteor.call('posts.unlike', { postId: postId, userId: Meteor.userId() }, (err, res) => {
                if (err) {
                    if (err.error && typeof err.error == 'string' && err.error.indexOf('posts.unlike') > -1) {
                        swal('Ups', err.reason, 'warning');
                    } else {
                        swal('Fehler', err.message, 'error');
                    }
                }
            });
        }

    }
});