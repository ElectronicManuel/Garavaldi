SimpleSchema.debug = true;

Posts = new Mongo.Collection('posts');

PostSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Titel",
        max: 30,
        autoform: {
            icon: 'info_outline'
        }
    },
    description: {
        type: String,
        label: "Beschreibung",
        max: 500,
        autoform: {
            rows: 5,
            icon: 'subject'
        }
    },
    private: {
        type: Boolean,
        label: "Privat",
        autoform: {
            type: "switch",
            trueLabel: " ",
            falseLabel: "Privat",
            icon: 'lock_outline'
        }
    },
    likes: {
        type: [String],
        label: "Likes",
        autoform: {
            type: "hidden"
        }
    },
    likeCount: {
        type: Number,
        label: "Anz. Likes",
        autoform: {
            type: "hidden"
        }
    },
    owner: {
        type: String,
        label: "Besitzer",
        autoform: {
            type: "hidden"
        }
    },
    ownerName: {
        type: String,
        label: "Besitzername",
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Erstellt am",
        autoform: {
            type: "hidden"
        }
    },
    picture: {
        type: String,
        label: "Bild",
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                uploadTemplate: 'FileInput', // <- Optional
                //previewTemplate: 'uploadPreview', // <- Optional
                /*insertConfig: { // <- Optional, .insert() method options, see: https://github.com/VeliovGroup/Meteor-Files/wiki/Insert-(Upload)
                    meta: {},
                    isBase64: false,
                    transport: 'ddp',
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true
                }*/
            }
        }
    }
});

Posts.attachSchema(PostSchema);

Posts.before.insert(function (userId, doc) {
    if(userId) {
        doc.owner = userId;
    } else {
        return false;
    }

    doc.createdAt = new Date();

    var username = "Not defined";
    if (Meteor.user().username) {
        username = Meteor.user().username;
    } else {
        username = Meteor.user().profile.name;
    }
    doc.ownerName = username;
    
    doc.likes = [];
    doc.likeCount = 0;
});

Meteor.methods({
    'posts.like'({ postId, userId }) {
        const post = Posts.findOne(postId);
        if(!userId) {
            throw new Meteor.Error('posts.like.nologin',
            'Du musst angemeldet sein um zu liken');
        }
        if (!Meteor.userId() == userId) {
            throw new Meteor.Error('posts.like.false_id',
                'Du kannst nur mit deiner eigenen ID liken');
        }
        if (post.owner == userId) {
            throw new Meteor.Error('posts.like.self',
                'Dein eigenes Bild liken, ist das nicht ein bisschen traurig?');
        }
        if (post.likes.indexOf(userId) > -1) {
            throw new Meteor.Error('posts.like.duplicate',
                'Du kannst nicht mehrmals liken');
        } else {
            Posts.update({ _id: postId }, { $push: { likes: userId }, $inc: { likeCount: 1 } });
        }
    },
    'posts.unlike'({ postId, userId }) {
        const post = Posts.findOne(postId);
        if(!userId) {
            throw new Meteor.Error('posts.unlike.nologin',
            'Du musst angemeldet sein deinen Like zu entfernen');
        }
        if (!Meteor.userId() == userId) {
            throw new Meteor.Error('posts.unlike.false_id',
                'Du kannst nur mit deiner eigenen ID liken');
        }
        if (post.owner == userId) {
            throw new Meteor.Error('posts.unlike.self',
                'Wie kannst du dein Bild nicht mögen?');
        }
        if (post.likes.indexOf(userId) == -1) {
            throw new Meteor.Error('posts.unlike.nolike',
                'Du hast dieses Bild nicht geliked');
        } else {
            Posts.update({ _id: postId }, { $pull: { likes: userId }, $inc: { likeCount: -1 }  });
        }
    }
});