Template.Install.helpers({
    versions: () => {
        return Versions.find({}, {$sort: {label: 1}});
    },
    dateFormat: (date) => {
        return momentReactive(date).fromNow();
    }
});