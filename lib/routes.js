FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
    }
});

FlowRouter.route('/protokoll', {
    name: 'protokoll',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ProtokollLayout'});
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('MainLayout', {main: 'ErrorLayout'});
    }
};