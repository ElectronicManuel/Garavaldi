AutoForm.addHooks('insertPostsForm', {
    onSuccess: (formType, result) => {
        Materialize.toast('Bild hochgeladen', 4000);
    }
});