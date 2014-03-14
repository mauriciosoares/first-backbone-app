var app = app || {};

(function() {
    app.AppView = Backbone.View.extend({
        el: '#todo-app',

        initialize: function() {
            this.$input = this.$el.find('#new-todo');
        },

        events: {
            'keypress #new-todo': 'addTodo'
        },

        addTodo: function(e) {
            if(e.which == ENTER_KEY) {
                app.todos.add({
                    title: 'yeah'
                });
            }
        }
    });
} ());