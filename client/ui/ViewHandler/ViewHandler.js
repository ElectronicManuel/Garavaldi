Template.ViewHandler.helpers({
    post: () => {
        findPost();
        return this.post;
    }
});

function findPost() {
    var id = FlowRouter.getQueryParam('i');
    query = Posts.findOne({ _id: id });

    if (query) {
        this.post = query;
    } else {
        this.post = undefined;
    }
}