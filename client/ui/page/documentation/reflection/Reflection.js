Template.Reflection.onRendered(() => {
    $('.parallax').parallax();
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
    new Question('Was habe ich gelernt?', 'lightbulb_outline', 'Reesponse'),
    new Question('Welche Folgerungen für das Fach kann ziehen?', 'speaker_notes', 'Reesponse'),
    new Question('Welche Methoden habe ich gewählt?', 'call_split', 'Reesponse'),
    new Question('Was hat mir gefallen, was nicht?', 'thumbs_up_down', 'Reesponse'),
    new Question('Was half mir beim lernen, was nicht?', 'library_books', 'Reesponse'),
    new Question('Was gelang mir gut?', 'thumb_up', 'Reesponse'),
    new Question('Was kann ich jetzt gut oder besser?', 'star_border', 'Reesponse'),
    new Question('Woran will ich das nächste Mal denken?', 'healing', 'Reesponse')
];

Template.Reflection.helpers({
    questions: () => {
        return questions;
    },
    zero: (toCheck) => {
        return toCheck == 0;
    }
});