var app = app || {};

(function() {
    app.TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#item-template').html()),

        events: {
            'click .done': 'toggleDone',
            'click .delete': 'delete',
            'dblclick .text': 'edit',
            'keydown .new-text': 'saveOrCloseEdit'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            var html = this.template({
                title: this.model.get('title'),
                done: this.model.get('done'),
                cid: this.model.cid
            });

            this.$el.html(html);

            this.$editInput = this.$el.find('.new-text');

            return this;
        },

        toggleDone: function() {
            this.model.set({
                done: !this.model.get('done')
            });
        },

        delete:function(e) {
            e.preventDefault();

            app.todos.remove(this.model);
        },

        edit: function() {
            this.$el.addClass('is-edit');
            this.$editInput.focus();
        },

        saveOrCloseEdit: function(e) {
            if(e.which === ENTER_KEY) {
                this.model.set({
                    title: this.$editInput.val()
                });
            } else if(e.which === ESC_KEY) {
                this.$el.removeClass('is-edit');
            }
        }
    });
} ());