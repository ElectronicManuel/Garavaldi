Template.HomeLayout.helpers({
    medias: () => {
        return Medias.find({}, {sort: {createdAt: -1}});
    }
});