define(["vendors/knockout-3.3.0", "viewmodels/column"], function (ko, Column) {

    var stored = JSON.parse(localStorage.getItem("board") || "[]");
    var columns = ko.observableArray([]);

    var state = ko.computed(function() {
            var _columns = columns();

            return _columns.map(function(column) {
                return {
                    name: column.name(),
                    tasks: column.tasks().map(function(task){
                        return task.data();
                    })
                };
            });
        });

    var todo = ko.computed(function(){
            return columns().map(function(column){
                return column.tasks();
            }).reduce(function(acc, tasks){
                return acc + tasks.filter(function(task){
                    return !task.done();
                }).length;
            }, 0);
        });
    
    var jsonState = ko.computed(function() {
            console.log("save");
            localStorage.setItem("board", JSON.stringify(state()));
        }).extend({ throttle: 1000 });

    var wrapperSize = ko.computed(function() {
        return (columns().length + 1) * 310;
    });

    stored.forEach(function(column){
        addColumn(column);
    });

    function addColumn(column) {
            column.parent = columns;
            columns.push(new Column(column));
    }

    return {
        columns: columns,
        wrapperSize: wrapperSize,
        addColumn: addColumn,
        todo: todo
    };

});