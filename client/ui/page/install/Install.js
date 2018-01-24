Template.Install.helpers({
    versions: () => {
        return Versions.find({}, {$sort: {updatedAt: -1}});
    },
    dateFormat: (date) => {
        return momentReactive(date).fromNow();
    }
});