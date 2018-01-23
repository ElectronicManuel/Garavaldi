Session.setDefault('sort', {
    createdAt: -1,
    likeCount: 0
});

Meteor.Spinner.options = {
    lines: 8, // The number of lines to draw
    length: 35, // The length of each line
    width: 10, // The line thickness
    radius: 15, // The radius of the inner circle
    corners: 0.7, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    zIndex: 2e9, // The z-index (defaults to 2000000000)
};

AutoForm.setDefaultTemplate('materialize');