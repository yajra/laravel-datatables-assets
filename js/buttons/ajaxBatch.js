/**
 * DataTables Batch Ajax action button.
 *
 * -- Laravel Integration --
 *
 * Button::make('ajaxBatch')
 *     ->text('Restore')
 *     ->url(route('batch-restore-action-url'))
 *     ->onSuccess('function(response) { alert('success') }')
 *     ->onError('function(err) { alert('error') }')
 *
 */
$.fn.dataTable.ext.buttons.ajaxBatch = {
    extend: 'selected',
    className: 'buttons-ajax btn-secondary',
    text: 'Ajax Batch Action (Change Me)',
    action: function (e, dt, node, config) {
        let selected = dt.rows({selected: true}).data();
        let formData = { data: [] };
        for (i = 0; i < selected.count(); i++) {
            formData.data.push(selected[i]);
        }

        let url = config.url || '';
        let method = config.method || 'POST';

        $.ajax({
            url: url,
            method: method,
            data: formData
        }).done(response => {
            if (config.hasOwnProperty('onSuccess')) config.onSuccess(response)

            dt.draw();
        }).fail(err => {
            if (config.hasOwnProperty('onError')) config.onError(err)
        })
    }
};
