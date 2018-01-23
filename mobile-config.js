App.info({
    id: 'ch.crosssitefeeding.egalerie',
    name: 'eGalerie',
    version: "0.0.1"
});

App.accessRule('https://*.crosssitefeeding.ch');

App.accessRule('https://*.googleapis.com');

App.accessRule('https://*.gstatic.com');

App.accessRule('https://*.google.com');

App.icons({
    'android_mdpi': 'public/favicon.png',
    'android_hdpi': 'public/favicon.png',
    'android_xhdpi': 'public/favicon.png',
    'android_xxhdpi': 'public/favicon.png',
    'android_xxxhdpi': 'public/favicon.png',
});