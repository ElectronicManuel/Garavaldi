/*
 * In dieser Datei werden Account Einstellungen getroffen
 */

AccountsTemplates.configure({
    defaultLayoutType: 'blaze',
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
pwd.template = "CustomTextInput";

AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "Benutzername",
        required: true,
        minLength: 5,
        template: "CustomTextInput"
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
    } catch (err) { }
});