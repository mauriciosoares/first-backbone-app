var app = app || {};

(function() {
    app.TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#item-template').html()),

        events: {
            'click': 'test'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            var html = this.template({
                title: this.model.get('title'),
                cid: this.model.cid
            });

            this.$el.html(html);

            return this;
        },

        test: function() {
            console.log(this);
        }
    });
} ());