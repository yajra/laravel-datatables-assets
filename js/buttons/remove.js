$.fn.dataTable.ext.buttons.iremove = {
    extend: 'remove',
    className: 'btn-danger',
    text: '<i class="fa fa-trash"></i>',
    formMessage: function ( e, dt ) {
        let rows = dt.rows( e.modifier() ).data().pluck('id');
        return 'Are you sure you want to delete the entries for the '+
            'following record(s)? <ul><li>'+rows.join('</li><li>')+'</li></ul>';
    },
    formButtons: [
        { text: '<i class="fa fa-trash"></i> Delete', className: 'btn btn-danger btn-editor-remove', action: function () { this.submit(); } },
        { text: 'Cancel', className: 'btn btn-secondary ml-2', action: function () { this.close(); } }
    ]
};

$.fn.dataTable.ext.buttons.iremoveSingle = {
    extend: 'removeSingle',
    className: 'btn-danger',
    text: '<i class="fa fa-trash"></i>',
    formMessage: function ( e, dt ) {
        let rows = dt.rows( e.modifier() ).data();
        return rows[0].DTE_Remove || 'Are you sure you want to delete record #' + rows[0].DT_RowId + '?';
    },
    formButtons: [
        { text: '<i class="fa fa-trash"></i> Delete', className: 'btn btn-danger btn-editor-remove', action: function () { this.submit(); } },
        { text: 'Cancel', className: 'btn btn-secondary ml-2', action: function () { this.close(); } }
    ]
};
