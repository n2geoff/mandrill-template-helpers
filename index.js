'use strict';

var helpers = {
    upper: function (value) {
        if (value && typeof value === 'string') {
            return value.toUpperCase();
        }
    },
    lower: function (value) {
        if (value && typeof value === 'string') {
            return value.toLowerCase();
        }
    },
    title: function (value) {
        var words = [];
        var response = [];

        if (value && typeof value === 'string') {
            //build words array
            words = value.split(' ');

            //capitalize each word
            words.forEach(function (word) {
                response.push(word.charAt(0).toUpperCase() + word.slice(1));
            });

            //return array of capitalized words
            return response.join(' ');
        }
    },
    url: function (value) {
        return encodeURIComponent(value);
    },
    date: function (value) {
        return value;
    },
    striptags: function (value) {
        return value.replace(/(<([^>]+)>)/ig, "");
    },
    unsub: function (value) {
        return value;
    }
};

module.exports = helpers;
