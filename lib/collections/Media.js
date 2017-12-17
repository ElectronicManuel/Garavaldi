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
        allowedValues: ['Öffentlich', 'Nicht gelistet', 'Privat'],
        autoform: {
            firstOption: false
        }
    },
    owner: {
        type: String,
        label: "Besitzer",
        autoValue: function () {
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
    },
    picture: {
        type: String,
        label: "Bild",
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                uploadTemplate: 'FileInput', // <- Optional
                //previewTemplate: 'uploadPreview', // <- Optional
                /*insertConfig: { // <- Optional, .insert() method options, see: https://github.com/VeliovGroup/Meteor-Files/wiki/Insert-(Upload)
                    meta: {},
                    isBase64: false,
                    transport: 'ddp',
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true
                }*/
            }
        }
    }
});

Medias.attachSchema(MediaSchema);

Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: true, // Required to let you remove uploaded file
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
            return true;
        } else {
            return 'Please upload image, with size equal or less than 10MB';
        }
    }
});