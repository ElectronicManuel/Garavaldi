var navs = [
    {
        name: 'home',
        route: '/',
        displayName: 'Home',
        icon: null
    },
    {
        name: 'upload',
        route: '/upload',
        displayName: '',
        icon: 'file_upload'
    }
];

Template.Routes.helpers({
    navigations: () => {
        return navs;
    }
});

Template.NavigationBar.onRendered(() => {
    $(".button-collapse").sideNav();
});