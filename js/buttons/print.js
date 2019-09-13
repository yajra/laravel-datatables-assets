$.fn.dataTable.ext.buttons.print = {
    className: 'buttons-print btn-primary',
    text: '<i class="fa fa-print"></i>',
    action: function (e, dt, button, config) {
        window.location = _buildUrl(dt, 'print');
    }
};
