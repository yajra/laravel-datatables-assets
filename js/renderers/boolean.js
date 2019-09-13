$.fn.dataTable.render.boolean = function () {
    return function (d) {
        let mode = 'danger';
        let label = "N";
        if (d || "1" === d) {
            mode = 'success';
            label = "Y";
        }

        return '<span class="badge badge-' + mode + '">' + label + '</span>'
    };
};
