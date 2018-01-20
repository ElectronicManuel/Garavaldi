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
    },
    {
        name: "Account System implementieren",
        schule: false,
        datum: '12.12.17',
        dauer: 3
    },
    {
        name: "Google Login implementieren",
        schule: false,
        datum: '13.12.17',
        dauer: 2
    },
    {
        name: "Bilder Liste erstellen und Insert ohne Datei ermöglichen",
        schule: true,
        datum: '14.12.17',
        dauer: 2
    },
    {
        name: "Bild hochladen und anzeigen Implementierung Teil 1",
        schule: false,
        datum: '17.12.17',
        dauer: 5
    },
    {
        name: "Bild hochladen und anzeigen Implementierung Teil 2",
        schule: false,
        datum: '09.01.18',
        dauer: 1.5
    },
    {
        name: "Bild hochladen und anzeigen Implementierung Teil 3",
        schule: false,
        datum: '10.01.18',
        dauer: 1
    },
    {
        name: "CSS Bugfixes",
        schule: true,
        datum: '11.01.18',
        dauer: 3
    },
    {
        name: "Posts löschen implementieren",
        schule: false,
        datum: '15.01.18',
        dauer: 1
    },
    {
        name: "Bessere Dialoge hinzufügen",
        schule: false,
        datum: '15.01.18',
        dauer: 1
    },
    {
        name: "Private Posts implementieren",
        schule: false,
        datum: '15.01.18',
        dauer: 1
    },
    {
        name: "'Mag ich' funktion",
        schule: false,
        datum: '16.01.18',
        dauer: 1
    },
    {
        name: "'Mag ich' / Private Posts klar visualisiert",
        schule: false,
        datum: '16.01.18',
        dauer: 1
    },
    {
        name: "Thumbnails ins Karten Design ändern",
        schule: false,
        datum: '16.01.18',
        dauer: 1
    },
    {
        name: "Suchfunktion einbauen",
        schule: true,
        datum: '18.01.18',
        dauer: 2
    },
    {
        name: "Ordnerstruktur verbessern",
        schule: true,
        datum: '18.01.18',
        dauer: 1
    },
    {
        name: "MaterializeCSS personalisieren",
        schule: false,
        datum: '20.01.18',
        dauer: 3
    }
];

Template.Protokoll.helpers({
    arbeiten: () => {
        return arbeiten;
    },
    totalZeit: () => {
        var total = 0.0;
        for (var i = 0; i < arbeiten.length; i++) {
            var dauer = arbeiten[i].dauer;
            total = total + dauer;
        }
        return total;
    }
});