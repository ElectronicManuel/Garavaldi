AutoForm.addHooks('insertMediaForm', {
    onSuccess: (formType, result) => {
        Materialize.toast('Medium hinzugefügt', 4000);
    }
});