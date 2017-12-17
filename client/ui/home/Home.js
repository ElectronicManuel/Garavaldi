Template.HomeLayout.helpers({
    posts: () => {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});