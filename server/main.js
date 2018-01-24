/*
 * Diese Datei konfiguriert allgemeine, Server-seitige Einstellungen
 */

// Google-Auth konfigurieren 
Meteor.startup(() => {
    // code to run on server at startup
    ServiceConfiguration.configurations.remove({
        service: "google"
    });
    ServiceConfiguration.configurations.insert({
        service: "google",
        clientId: Meteor.settings.google.appId,
        loginStyle: "popup",
        secret: Meteor.settings.google.secret
    });
});
