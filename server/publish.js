Meteor.publish('medias', () => {
    return Medias.find({});
});

Meteor.publish('images', () => {
    return Images.collection.find({});
});

Medias.allow({
    insert: (userId, doc) => {
        if(userId !== undefined) {
            return true;
        } else {
            return false;
        }
    }
});