Template.Reflection.onRendered(() => {
    $('.collapsible').collapsible();
});

class Question {
    constructor(question, icon, response) {
        this.question = question;
        this.icon = icon;
        this.response = response;
    }
}

var questions = [
    new Question('Was habe ich gelernt?', 'lightbulb_outline', 'Ich habe gelernt eine Webapplikation mit Meteor zu entwickeln, auf verschiedenen Bildschirmgrössen responsive darzustellen und als Android App zu verpacken.'),
    new Question('Was hat mir gefallen, was nicht?', 'thumbs_up_down', 'Das Entwickeln mit Meteor hat mir gefallen. Vor allem die Möglichkeit, Dateien irgendwo im Projekt zu speichern und automatisch in die Webseite einzubinden. Nicht gefallen haben mir die CSS Probleme mit MaterializeCSS, die oft auftraten.'),
    new Question('Was gelang mir gut?', 'thumb_up', 'Ich habe noch zu erledigende Dinge in GitHub gespeichert und priorisiert, deshalb konnte ich mich auf die wichtigen Arbeiten fokusieren. Auch habe ich meinen Quellcode nach Thema (Alle Dateien zur Dokumentation in einen Ordner) und nicht nach Dateityp (Alle HTML, CSS und JS Dateien getrennt speichern) verpackt. Das vereinfachte die Entwicklung ungemein.'),
    new Question('Was kann ich jetzt gut oder besser?', 'star_border', 'Ich kann jetzt ein Projekt besser strukturieren und planen. Ich habe gelernt wie man eine Echtzeit-Applikation mit Meteor entwickelt. Ausserdem weiss ich jetzt, was es braucht um eine Webseite responsiv zu gestalten.'),
    new Question('Woran will ich das nächste Mal denken?', 'healing', 'Beim nächsten Projekt denke ich daran, Anforderungen zu Beginn klar zu definieren und zu priorisieren.')
];

Template.Reflection.helpers({
    questions: () => {
        return questions;
    },
    zero: (toCheck) => {
        return toCheck == 0;
    }
});