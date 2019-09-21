/**
 * @name DataTables Editor DateRangePicker
 * @requires https://www.daterangepicker.com/
 **
 * @example
 *
 * -- Laravel Integration --
 *
 * // Date Range Picker
 * Fields\Date::make('range')
 *  ->type('daterangepicker'),
 *  ->opts([
 *      // additional options...
 *      "startDate": now(),
 *      "endDate": now()->addDays(30)
 *  ])
 *
 * // Single Date Picker
 * Fields\Date::make('date')
 *  ->type('daterangepicker')
 *  ->opts([
 *      'singleDatePicker' => true,
 *      'showDropdowns'    => true,
 *  ]),
 *
 *  // Time Picker Only
 * Fields\Time::make('timePicker')
 *  ->type('daterangepicker')
 *  ->opts([
 *      'singleDatePicker' => true,
 *      'timePicker' => true,
 *      'datePicker' => false,
 *  ])
 *
 * -- Vanilla Js --
 * new $.fn.dataTable.Editor( {
 *   "ajax": "php/dates.php",
 *   "table": "#example",
 *   "fields": [ {
 *       "label": "Date Range:",
 *       "name": "dateRange",
 *       "type": "daterangepicker",
 *       "opts": {
 *           // additional opts...
 *       }
 *     },
 *     // additional fields...
 *   ]
 * } );
 */

'use strict';

if (!$.fn.dataTable.ext.editorFields) {
    $.fn.dataTable.ext.editorFields = {};
}

let _fieldTypes = $.fn.dataTable.Editor ?
    $.fn.dataTable.Editor.fieldTypes :
    $.fn.dataTable.ext.editorFields;

_fieldTypes.daterangepicker = {
    create: function (conf) {
        conf.opts = conf.opts || {};

        conf.opts.locale = conf.opts.locale || {};

        conf.opts.locale.format = conf.format || 'YYYY-MM-DD';

        conf._input = $('<input/>')
            .attr($.extend({
                id: conf.id,
                type: 'text'
            }, conf.attr || {}))
            .daterangepicker(conf.opts || {});

        if (conf.opts.datePicker === false) {
            conf._input.on('show.daterangepicker', function (ev, picker) {
                picker.container.find(".calendar-table").hide();
            });
        }

        return conf._input[0];
    },

    get: function (conf) {
        $(conf._input).data('daterangepicker').elementChanged(); // Update dates of the picker from input
        return conf._input.val();
    },

    set: function (conf, val) {
        conf._input.val(val);
    },

    enable: function (conf) {
    },

    disable: function (conf) {
    }
};
