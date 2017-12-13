import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    ServiceConfiguration.configurations.upsert({
        service: "google"
    }, {
            $set: {
                appId: Meteor.settings.google.appId,
                loginStyle: "popup",
                secret: Meteor.settings.google.secret
            }
        });
});
