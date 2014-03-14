var app = app || {};

(function() {
    'use strict';

    var Todos = Backbone.Collection.extend({
        model: app.Todo
    });

    app.todos = new Todos();
} ());