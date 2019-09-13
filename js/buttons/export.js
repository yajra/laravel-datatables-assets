$.fn.dataTable.ext.buttons.export = {
    extend: 'collection',
    className: 'btn-primary',
    text: 'Export&nbsp;<span class="caret"/>',
    buttons: [
        {extend: 'csv', text: 'CSV'},
        {extend: 'excel', text: 'Excel'},
        {extend: 'pdf', text: 'PDF'}
    ]
};
