SimpleSchema.debug = true;

Medias = new Mongo.Collection('media');

MediaSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Titel",
        max: 30
    },
    description: {
        type: String,
        label: "Beschreibung"
    },
    visibility: {
        type: String,
        label: "Sichtbarkeit",
        allowedValues: ['Öffentlich', 'Nicht gelistet', 'Privat']
    },
    owner: {
        type: String,
        label: "Besitzer",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Erstellt am",
        autoValue: () => {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Medias.attachSchema(MediaSchema);