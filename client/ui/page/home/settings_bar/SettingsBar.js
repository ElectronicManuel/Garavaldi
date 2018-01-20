var settingsBarHelpers = {
    isCaller: (callerName) => {
        var caller = Template.currentData().caller
        if(caller == undefined) {
            caller = Template.parentData().caller;
        }
        return  caller == callerName;
    },
    caller: () => {
        var caller = Template.currentData().caller
        if(caller == undefined) {
            caller = Template.parentData().caller;
        }
        return caller;
    },
    statusEquals: (name, type) => {
        return Session.get('sort')[name] == type;
    },
    settingsList: () => {
        return [
            {
                name: 'createdAt',
                display: 'Datum'
            },
            {
                name: 'likeCount',
                display: 'Likes'
            }
        ];
    }
};

var singleSettingEvents = {
    'click .sortSetting': (event) => {
        event.preventDefault();

        var sortName = Template.currentData().name;

        var sortObject = Session.get('sort');
        var sortSetting = sortObject[sortName];

        if(sortSetting == 0) {
            sortSetting = -1;
        }
        else if(sortSetting == -1) {
            sortSetting = 1;
        }
        else if(sortSetting == 1) {
            sortSetting = 0;
        }

        sortObject[sortName] = sortSetting;
        Session.set('sort', sortObject);

        return false;
    }
};

Template.SettingsBar.helpers(settingsBarHelpers);

Template.SingleSetting.events(singleSettingEvents);
Template.SingleSetting.helpers(settingsBarHelpers);