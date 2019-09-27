/**
 * DataTables reload button.
 *
 * -- Laravel Integration --
 *
 * Button::make('reload')
 *
 */
$.fn.dataTable.ext.buttons.reload = {
    name: 'reload',
    className: 'btn-primary',
    text: '<i class="fa fa-sync" data-toggle="tooltip" data-title="Reload"></i>',
    action: function (e, dt, button, config) {
        button.find('i').removeClass('fa-sync').addClass('fa-spinner fa-spin');
        button.attr('disabled', true);
        dt.on('xhr.reload', () => {
            button.find('i').addClass('fa-sync').removeClass('fa-spinner fa-spin');
            button.attr('disabled', false);;
        });

        dt.draw(false);
    }
};
