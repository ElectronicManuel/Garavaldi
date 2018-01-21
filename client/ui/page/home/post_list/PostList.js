Template.PostList.helpers({
    posts: () => {
        var sortObject = Session.get('sort');
        var actualSort = {};

        for (var key in sortObject) {
            if (sortObject.hasOwnProperty(key)) {
                var setting = sortObject[key]; // Since dynamic, use []
                if (setting != 0) {
                    actualSort[key] = setting;
                }
            }

        }

        var searchObject = {};

        var searchQuery = Session.get('search_query');
        if (searchQuery) {
            var searchRegex = { $regex: '.*' + searchQuery + '.*', $options: 'i' };
            searchObject = { $or: [{ title: searchRegex }, { description: searchRegex }, { ownerName: searchRegex }] };
        }

        console.log('Sort: ', actualSort);
        console.log('Search: ', searchObject);

        var toReturn = Posts.find(searchObject, {sort: actualSort});
        $('.tooltipped').tooltip({ delay: 50 });
        return toReturn;
    }
});