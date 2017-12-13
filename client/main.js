Template.NavigationSide.onRendered(() => {
    $(".button-collapse").sideNav();
});

var arbeiten = [
    {
        name: "Meteor installieren",
        datum: '09.12.17',
        schule: false,
        dauer: 0.1
    },
    {
        name: "Hosting Lösung für Meteor App finden",
        schule: false,
        datum: '09.12.17',
        dauer: 0.3
    },
    {
        name: "Meteor Tutorial Videoreihe anschauen",
        schule: false,
        datum: '09.12.17',
        dauer: 2.5
    },
    {
        name: "URL Routing mit FlowRouter einrichten",
        schule: false,
        datum: '10.12.17',
        dauer: 0.5
    },
    {
        name: "Materialize CSS einbinden",
        schule: false,
        datum: '12.12.17',
        dauer: 1
    }
];

Template.ProtokollLayout.helpers({
    arbeiten: () => {
        return arbeiten;
    },
    totalZeit: () => {
        var total = 0.0;
        for(var i = 0; i < arbeiten.length; i++) {
            var dauer = arbeiten[i].dauer;
            total = total + dauer;
        }
        return total;
    }
});