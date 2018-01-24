Template.Install.helpers({
    versions: () => {
        return Versions.find({}, {$sort: {label: 1}});
    },
    dateFormat: (date) => {
        moment.locale('de');
        return moment(date).fromNow();
    }
});