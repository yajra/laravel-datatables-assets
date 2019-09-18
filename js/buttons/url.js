/**
 * DataTables URL button.
 *
 * -- Laravel Integration --
 *
 * // Add DTE_URL column to response.
 * datatables($query)
 *     ->addColumn('DTE_URL', '{{ $url }}')
 *     ->addColumn('edit_url', '{{ $url }}')
 *     ...
 *
 * // Add URL button to open the row link.
 * Button::make('url')->text('Edit'),
 * Button::make('url')->data('edit_url')->text('Edit')
 *
 */
$.fn.dataTable.ext.buttons.url = {
    extend: 'selectedSingle',
    className: 'buttons-url btn-secondary',
    text: 'URL Action (change me)',
    action: function (e, dt, node, config) {
        let data = dt.row({selected: true}).data();
        let key = config.data || 'DTE_URL';
        window.location = data[key] || '#';
    }
};
