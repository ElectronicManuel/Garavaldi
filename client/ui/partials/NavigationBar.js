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
        displayName: 'Hochladen',
        icon: 'file_upload'
    }
];

Template.Routes.helpers({
    navigations: () => {
        return navs;
    }
});

Template.NavigationBar.helpers({
    isHome: () => {
        console.log('Route = home', FlowRouter.getRouteName() == 'home');
        return FlowRouter.getRouteName() == 'home';
    }
});

Template.NavigationBar.onRendered(() => {
    $(".button-collapse").sideNav();
});