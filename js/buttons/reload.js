/**
 * DataTables reload button.
 *
 * -- Laravel Integration --
 *
 * Button::make('reload')
 *
 */
$.fn.dataTable.ext.buttons.reload = {
    className: 'btn-primary',
    text: '<i class="fa fa-sync" data-toggle="tooltip" data-title="Reload"></i>',
    action: function (e, dt, button, config) {
        dt.draw(false);
    }
};
