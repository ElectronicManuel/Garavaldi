Template.SearchBar.events({
    'keydown, keyup #search_input': (event) => {
        Session.set('search_query', event.target.value);
    }
});

Template.SearchBar.helpers({
    getQuery: () => {
        var query = Session.get('search_query');
        return query;
    }
});