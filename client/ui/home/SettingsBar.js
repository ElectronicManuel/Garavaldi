var settingsBarHelpers = {
    currentSort: (type) => {
        return Session.get('sort') == type;
    },
    sortName: () => {
        return Session.get('sort');
    }
};

var settingsBarEvents = {
    'change input[name="sort"]': (event) => {
        event.preventDefault();
        Session.set('sort', event.target.id);
    }
};

Template.SettingsBarHome.helpers(settingsBarHelpers);
Template.SettingsBarHome.events(settingsBarEvents);

Template.SettingsBarSide.helpers(settingsBarHelpers);
Template.SettingsBarSide.events(settingsBarEvents);