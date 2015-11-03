define(["vendors/knockout-3.3.0", "viewmodels/task"], function (ko, Task) {

    function Column(options) {
        var self = this;
        this.id = ko.computed(function() {
            var _parent = options.parent();

            return _parent.indexOf(self);
        });
        this.name = ko.observable(options.name || "new");
        this.tasks = ko.observableArray(function() {
            var _tasks = options.tasks || [];

            return _tasks.map(function(task) {
                return new Task(task);
            });
        }());
        this.addTaskAction = ko.computed(function() {
            return "#/columns/" + self.id();
        });
    }

    Column.prototype.addTask = function(task) {
        this.tasks.push(new Task(task));
    }

    return Column;

});