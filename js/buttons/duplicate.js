$.fn.dataTable.ext.buttons.duplicate = {
    extend: 'selected',
    className: 'buttons-duplicate btn-success',
    text: '<i class="fa fa-copy"></i> Duplicate',
    action: function (e, dt, node, config) {
        // Start in edit mode, and then change to create
        dt.editor()
            .edit(dt.rows({selected: true}).indexes(), {
                title: 'Duplicate record',
                buttons: 'Create from existing'
            })
            .mode('create');
    }
};
