define(["vendors/sammy", "viewmodels/board"], function(sammy, board) {

    return sammy("#main", function() {

        this.post("#/columns", function(context) {
            board.addColumn({});
        });

        this.post("#/columns/:id", function(context) {
            board.columns()[context.params.id].addTask({});
        });

        this.del("#/columns/:id", function(context) {
            board.columns.remove(board.columns()[context.params.id]);
        });

    });

});