var app = app || {};

(function() {
    app.AppView = Backbone.View.extend({
        el: '#todo-app',

        initialize: function() {
            console.log(this.$el);
        }
    });
} ());