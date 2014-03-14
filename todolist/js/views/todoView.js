var app = app || {};

(function() {
    app.TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#item-template').html()),

        events: {
            'click .done': 'toggleDone'
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

            return this;
        },

        toggleDone: function() {
            this.model.set({
                done: !this.model.get('done')
            });
        }
    });
} ());