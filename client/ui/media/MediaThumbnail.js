Template.MediaThumbnail.helpers({
    since: () => {
        moment.locale('de');
        return moment(Template.currentData().createdAt).fromNow();
    },
    link: () => {
        return '/view?i=' + Template.currentData()._id;
    },
    file: () => {
        toReturn = Images.findOne({_id: Template.currentData().picture});
        return toReturn;
    }
});

moment.locale('de', {
    relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: "eine Minute",
        mm: "%d Minuten",
        h: "einer Stunde",
        hh: "%d Stunden",
        d: "ein Tag",
        dd: "%d Tage",
        M: "ein Monat",
        MM: "%d Monte",
        y: "ein Jahr",
        yy: "%d Jahre"
    }
});