/*
 * Dies ist eine Clientseitige Simulation der Collection um Änderungen schnell zu verarbeiten
 */
Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: true, // Required to let you remove uploaded file
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
            return true;
        } else {
            return 'Bitte wählen Sie ein Bild mit max. 10MB Grösse';
        }
    }
});