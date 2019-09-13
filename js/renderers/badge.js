$.fn.dataTable.render.badge = function (badgeType) {
    return function (d, type, row) {
        if (! badgeType) {
            badgeType = 'info';
        }

        return '<span class="badge badge-' + badgeType + '">' + d + '</span>'
    };
};
