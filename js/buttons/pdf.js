$.fn.dataTable.ext.buttons.pdf = {
    className: 'buttons-pdf btn-primary',
    text: '<i class="fa fa-file-pdf-o" data-toggle="tooltip" data-title="Export to PDF"></i>',
    action: function (e, dt, button, config) {
        window.location = _buildUrl(dt, 'pdf');
    }
};
