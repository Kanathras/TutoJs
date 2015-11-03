define(["vendors/knockout-3.3.0"], function (ko) {

    function Task(options) {
        var self = this;
        this.name = ko.observable(options.name || "todo");
        this.edit = ko.observable(false);
        this.done = ko.observable(options.done || false);
        this.data = ko.computed(function() {
            return {
                "name": self.name(),
                "done": self.done()
            };
        });
    }

    Task.prototype.enableEdit = function(task, event) {
        this.edit(true);
        $(event.target).find('input').select();
    }

    Task.prototype.disableEdit = function(task, event) {
        this.edit(false);
    }

    return Task;

});