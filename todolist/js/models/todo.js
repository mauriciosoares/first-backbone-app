var app = app || {};

(function() {
    app.Todo = Backbone.Model.extend({
        initialize: function() {
            console.log('model created');
        }
    });
} ());