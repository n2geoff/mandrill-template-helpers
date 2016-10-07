'use strict';

var handlebars = require('handlebars');

handlebars.registerHelper({
    upper: function (value) {
        return value.toUpperCase();
    },
    lower: function (value) {
        return value.toLowerCase();
    },
    title: function (value) {
        return value;
    },
    url: function (value) {
        return value;
    },
    date: function (value) {
        return value;
    },
    striptags: function (value) {
        return value;
    },
    unsub: function(value) {
        return value;
    }
});
