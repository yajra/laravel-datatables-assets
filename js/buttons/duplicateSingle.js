$.fn.dataTable.ext.buttons.duplicateSingle = {
    extend: 'selectedSingle',
    className: 'buttons-duplicate btn-success',
    text: '<i class="fa fa-copy"></i> Duplicate',
    action: function (e, dt, node, config) {
        // Start in edit mode, and then change to create
        dt.editor()
            .edit(dt.rows({selected: true}).indexes(), {
                title: 'Duplicate Record',
                buttons: [
                    {
                        text: '<i class="fa fa-copy"></i> Duplicate',
                        className: 'btn btn-success btn-editor-duplicate',
                        action: function () {
                            this.submit();
                        }
                    },
                    {
                        text: 'Cancel', className: 'btn btn-secondary ml-2', action: function () {
                            this.close();
                        }
                    }
                ]
            })
            .mode('create');
    }
};
