Template.ViewHandler.onRendered(() => {
    var id = FlowRouter.getQueryParam('i');
    query = Posts.findOne({ _id: id });

    // Falls der Post privat ist, wird ein flag gesetzt und der post nur dann übernommen, wenn der besitzer ihn anfragt
    if (query.private) {
        this.private = true;
        if (query.owner === Meteor.userId) {
            this.post = query;
        } else {
            this.post = null;
        }
    } else {
        this.post = query;
    }
});

Template.ViewHandler.helpers({
    viewable: () => {
        return this.post != null;
    }
});