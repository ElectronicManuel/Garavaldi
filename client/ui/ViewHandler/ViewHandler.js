Template.ViewHandler.helpers({
    post: () => {
        findPost();
        return this.post;
    }
});

function findPost() {
    if(!this.queried) {
        var id = FlowRouter.getQueryParam('i');
        query = Posts.findOne({ _id: id });
    
        // Falls kein Post unter der ID gefunden wird

        console.log(query);
        if(query) {
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
        } else {
            this.post = undefined;
        }
        console.log('Post from ViewHandler: ', this.post);
        // Flag setzen um erneutes abfragen zu vermeiden
        this.queried = true;
    }
}