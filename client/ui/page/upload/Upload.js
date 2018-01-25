AutoForm.addHooks('insertPostsForm', {
    onSuccess: function (formType, result) {
        var id = this.docId;
        FlowRouter.go('/view', null, { i: id });
        swal('Bild hochgeladen', '', 'success');
    }
});