/*
 * Diese Datei publiziert Datenbankeinträge an den Client
 */

Meteor.publish('posts', () => {
    return Posts.find({ $or: [{private: false}, {owner: Meteor.userId() }] });
});

Meteor.publish('images', () => {
    return Images.collection.find({});
});
Meteor.publish('versions', () => {
    return Versions.find({});
});

Posts.allow({
    insert: (userId, doc) => {
        if(userId !== undefined) {
            return true;
        } else {
            return false;
        }
    },
    remove: (userId, doc) => {
        if(userId == doc.owner) {
            return true;
        } else {
            return false;
        }
    },
    update: (userId, doc) => {
        if(userId == doc.owner) {
            return true;
        } else {
            return false;
        }
    }
});