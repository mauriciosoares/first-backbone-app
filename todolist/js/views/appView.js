var app = app || {};

(function() {
    app.AppView = Backbone.View.extend({
        el: '#todo-app',

        initialize: function() {
            this.$input = this.$el.find('#new-todo');
            this.$list = this.$el.find('#list-todo');

            app.todos.on('change', this.renderTodos, this);
            app.todos.on('add', this.renderTodos, this);
        },

        events: {
            'keypress #new-todo': 'addTodo'
        },

        addTodo: function(e) {
            if(e.which == ENTER_KEY && this.$input.val()) {
                app.todos.add({
                    title: this.$input.val()
                });

                this.$input.val('');
            }
        },

        renderTodos: function() {
            this.$list.html('');

            _.each(app.todos.models, function(todo) {
                var todoHtml = new app.TodoView({
                    model: todo
                });

                this.$list.append(todoHtml.el);
            }, this);
        }
    });
} ());