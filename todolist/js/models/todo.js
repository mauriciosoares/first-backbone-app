var app = app || {};

(function() {
    'use strict';

    app.Todo = Backbone.Model.extend({
        defaults: {
            done: false
        },

        validate: function(attrs) {
            if(!attrs.title) return 'Must have a title!';
        },

        initialize: function() {

        }
    });
} ());