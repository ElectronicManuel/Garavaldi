/*
 * Hier werden die einzelnen Routen definiert, da Meteor eine Single Page Application ist, hätte die URL ansonsten keine Bedeutung
 */

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

FlowRouter.route('/upload', {
    name: 'upload',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('MainLayout', {main: 'Upload'});
    }
});

FlowRouter.route('/view', {
    name: 'view',
    action() {
        BlazeLayout.render('MainLayout', {main: 'PostFinder'});
    }
});

FlowRouter.route('/install', {
    name: 'install',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Install'});
    }
})

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('MainLayout', {main: 'UrlNotFound'});
    }
};

FlowRouter.route('/documentation', {
    name: 'documentation',
    action() {
        BlazeLayout.render('Documentation');
    }
});

FlowRouter.triggers.enter([ () => { window.scrollTo(0, 0); } ]);