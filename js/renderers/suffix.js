$.fn.dataTable.render.suffix = function (suffix) {
    return function (d) {
        return d + ' ' + suffix;
    };
};
