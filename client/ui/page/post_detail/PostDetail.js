Template.PostDetail.onRendered(() => {
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip({ delay: 50 });
});

Template.PostDetail.events({
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
        
        var hasLiked = false;
        var post = Template.currentData().post;
        if (post && post.likes) {
            hasLiked = post.likes.indexOf(Meteor.userId()) > -1;
        }

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