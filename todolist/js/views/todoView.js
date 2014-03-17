var app = app || {};

(function() {
    'use strict';

    app.TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#item-template').html()),

        events: {
            'click .done': 'toggleDone',
            'click .delete': 'delete',
            'dblclick .text': 'edit',
            'keydown .new-text': 'saveOrCloseEdit',
            'blur .new-text': 'close'
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

            this.model.destroy();
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

                if(!this.model.isValid()) {
                    this.model.destroy();
                }
            } else if(e.which === ESC_KEY) {
                this.close();
            }
        },

        close: function() {
            this.$el.removeClass('is-edit');
        }
    });
} ());