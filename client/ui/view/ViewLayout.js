Template.ViewLayout.onCreated(() => {
    
});

Template.ViewLayout.helpers({
    media: () => {
        return getCurrentMedia();
    },
    file: () => {
        current = getCurrentMedia();
        console.log(current);
        toReturn = Images.findOne({ _id: current.picture });
        return toReturn;
    }
});

function getCurrentMedia() {
    var id = FlowRouter.getQueryParam('i');
    media = Medias.findOne({ _id: id });
    if (media.visibility == 'private') {
        if (media.owner === Meteor.userId) {
            return media = media;
        } else {
            return media = null;
        }
    } else {
        return media = media;
    }
}