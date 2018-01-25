Template.Goals.onRendered(() => {
    $('.collapsible').collapsible();
});

class Goal {
    constructor(title, quote, icon, result) {
        this.title = title;
        this.quote = quote;
        this.icon = icon;
        this.result = result;
    }
}

var goals = [
    new Goal('Bilder hochladen',
        'Ein angemeldeter Benutzer kann auf der Webseite mehrere Bilder hochladen. Diese Bilder werden persistent auf dem Server gespeichert und können von Benutzern eingesehen werden.',
        'file_upload',
        'Auf eGalerie kann man als angemeldeter Benutzer Bilder hochladen, welche (in Echtzeit) von den anderen Benutzern angeschaut werden können. Die Bilder werden persistent in einem Amazon AWS S3 Bucket gespeichert.'
    ),
    
    new Goal('Galerie sortieren',
        'Jeder Benutzer, ob angemeldet oder nicht, kann seine Galerie nach gewissen Kriterien sortieren. Erscheinungsdatum Anzahl Likes Ausserdem ist es möglich in der Galerie nach Bildern zu suchen.',
        'filter_list',
        'Die Galerie kann nach Erscheinungsdatum und Anzahl Likes sortiert werden. Ebenfalls ist es Möglich in der Galerie nach bestimmten Bildern zu suchen.'
    ),
    
    new Goal('Design',
        'Die Webseite ist ansprechend und modern gestyled und wird auf verschiedenen Bildschirmgrössen korrekt dargestellt.',
        'art_track',
        'Die Webseite ist im Material Stil von Google gehalten. Die Elemente passen sich je nach Bildschirmgrösse an. Responsives Design wurde auf einem 27 Zoll 16:9, einem 15 Zoll 16:9 und einem 35 Zoll 21:9 Bildschirm getestet. Die Mobile Ansicht wurde mit einem Samsung Galaxy S8+, iPhone X, Samsung Galaxy A3, iPhone 8 und einem Samsung Galaxy S7 Edge getestet.'
    ),

    new Goal('Hilfe Video',
        'Auf der Hochladen Seite kann man neue Bilder hochladen. Auch kann man einige Einstellungen treffen. Mit einem Klick auf den "Hilfe"-Knopf kann man ein Video-Tutorial zur Benutzung der Webseite aufrufen.',
        'help_outline',
        'Das Anleitungsvideo ist nicht über einen Hilfe Knopf in der Hochladen Maske verfügbar. Es ist nun in der Dokumentation, welche über einen Link im Footer zugänglich ist.'
    ),

    new Goal('Deadline',
        'Alle Ziele müssen bis 21.01.2018 erreicht worden sein, damit noch Zeit zum testen bleibt.',
        'block',
        'Da ich während dem Implementieren ständig getestet habe, konnte ich die Deadline nicht einhalten.'
    ),

    new Goal('Medien',
        'Der Webauftritt muss mindestens drei verschiedene mediale Elemente beinhalten.',
        'image',
        'Da die Webseite eine Fotosharing Platform ist, sind Bilder von Benutzern auf der Webseite verfügbar. Allerdings habe ich auch eigene Medien auf der Webseite: Das Anleitungsvideo in der Dokumentation mit Voiceover und die 404-Fehler Seiten. <a href="/KeineSeite">404-Fehler</a>'
    )
    
];

Template.Goals.helpers({
    goals: () => {
        return goals;
    },
    zero: (toCheck) => {
        return toCheck == 0;
    }
});