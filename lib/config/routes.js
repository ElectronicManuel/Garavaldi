FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

FlowRouter.route('/protokoll', {
    name: 'protokoll',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('MainLayout', {main: 'Protokoll'});
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

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('MainLayout', {main: 'UrlNotFound'});
    }
};