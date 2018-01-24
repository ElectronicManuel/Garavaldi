Template.Protokoll.onRendered(() => {
});

Template.Protokoll.events({
    'click #up': (event) => {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    }
});

class Action {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
    }
}

class Workday {
    constructor(datum, place, actions) {
        this.datum = datum;
        this.place = place;
        this.actions = actions;

        var total = 0;
        var instance = this;
        for(var i = 0; i < instance.actions.length; i++) {
            var dauer = actions[i].duration;
            total = total + dauer;
        }

        this.total = total;
    }
}

var home = {
    icon: 'home',
    display: 'Zuhause'
}

var school = {
    icon: 'graduation-cap',
    display: 'In der Schule'
}

var arbeiten = [
    new Workday('09.12.17', home, [
        new Action('Meteor installieren', 0.1),
        new Action('Hosting Lösung für Meteor App finden', 0.3),
        new Action('Meteor Tutorial Videoreihe anschauen', 2.5)
    ]),
    new Workday('10.12.17', home, [new Action('URL Routing einrichten', 0.5)]),
    new Workday('12.12.17', home, [
        new Action('MaterializeCSS einbinden', 1),
        new Action('Account System implementieren', 3)
    ]),
    new Workday('13.12.17', home, [new Action('Google Login implementieren', 2)]),
    new Workday('14.12.17', school, [new Action('Postliste erstellen mit insert ohne Datei', 2)]),
    new Workday('17.12.17', home, [new Action('Bild hochladen/anzeigen Implementierung Teil 1', 5)]),
    new Workday('09.01.18', home, [new Action('Bild hochladen/anzeigen Implementierung Teil 2', 1.5)]),
    new Workday('10.01.18', home, [new Action('Bild hochladen/anzeigen Implementierung Teil 3', 1)]),
    new Workday('11.01.18', school, [new Action('CSS Bugfixes', 3)]),
    new Workday('15.01.18', home, [
        new Action('Posts löschen implementieren', 1),
        new Action('Bessere Dialoge hinzufügen', 1),
        new Action('Private Posts implementieren', 1)
    ]),
    new Workday('16.01.18', home, [
        new Action("'Mag ich' funktion", 1),
        new Action("'Mag ich' / Private Posts design", 1),
        new Action("Thumbnails im Karten-Stil", 1)
    ]),
    new Workday('18.01.18', school, [
        new Action("Suchfunktion einbauen", 2),
        new Action("Ordnerstruktur verbessern", 1)
    ]),
    new Workday('20.01.18', home, [
        new Action("MaterializeCSS personalisieren", 3),
        new Action("Posts bearbeiten", 1),
        new Action('Formulare aufbessern', 1)
    ]),
    new Workday('21.01.18', home, [
        new Action('Hosting Anbieter wechseln', 2),
        new Action('Bugfixes', 1)
    ]),
    new Workday('22.01.18', home, [
        new Action('Dokumentation Struktur vorbereiten', 1)
    ]),
    new Workday('23.01.18', home, [
        new Action('Android App entwickeln', 2)
    ]),
    new Workday('24.01.18', home, [
        new Action('Anleitungsvideo erstellen', 1),
        new Action('404-Bilder erstellen', 1),
        new Action('Dokumentation schreiben', 2)
    ])
];

Template.Protokoll.helpers({
    arbeiten: () => {
        return arbeiten;
    },
    totalZeit: () => {
        var total = 0.0;
        for (var i = 0; i < arbeiten.length; i++) {
            var dauer = arbeiten[i].total;
            total = total + dauer;
            for (var j = 0; j < arbeiten[i].actions.length; j++) {
                
            }
        }
        return total;
    }
});