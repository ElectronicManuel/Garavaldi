FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
    }
});

FlowRouter.route('/protokoll', {
    name: 'protokoll',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('MainLayout', {main: 'ProtokollLayout'});
    }
});

FlowRouter.route('/upload', {
    name: 'upload',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('MainLayout', {main: 'UploadLayout'});
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