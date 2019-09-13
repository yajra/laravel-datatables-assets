$.fn.dataTable.render.prefix = function (prefix) {
    return function (d) {
        return prefix + ' ' + d;
    };
};
