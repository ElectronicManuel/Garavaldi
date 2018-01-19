AccountsTemplates.configure({
    defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
    defaultTemplate: 'fullPageAtForm',
    defaultLayout: 'MainLayout',
    defaultLayoutRegions: {
        nav: 'NavigationBar',
        footer: 'Footer'
    },
    defaultContentRegion: 'main',
    enablePasswordChange: true,
    homeRoutePath: '/',
    focusFirstInput: true
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "Benutzername",
        required: true,
        minLength: 5,
    },
    pwd
]);

//signIn, signUp, changePwd, forgotPwd, resetPwd, enrollAccount
var account_routes = ['signIn', 'signUp', 'changePwd'];
for (var i = 0; i < account_routes.length; i++) {
    var route = account_routes[i];
    AccountsTemplates.configureRoute(route);
}

T9n.setLanguage('de');

Accounts.onLogout(() => {
    try {
        swal('Abgemeldet', 'Abmeldung erfolgreich', 'info');
    } catch(err) {}
});