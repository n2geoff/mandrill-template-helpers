'use strict';

var test = require('tape');
var helpers = require('../index');

//initial test string
var str = "hello Cruel world of earth 1";

//tests are ran in order

test('setup', function (t) {
    t.comment("setup source: " + str);

    t.end();
});

test('convert string to upper', function (t) {
    t.plan(2);

    t.equal(typeof str, 'string');

    t.equal("HELLO CRUEL WORLD OF EARTH 1", helpers.upper(str));
});

test('convert string to lower', function (t) {
    t.plan(1);

    t.equal("hello cruel world of earth 1", helpers.lower(str));
});

test('convert string to title', function (t) {
    t.plan(1);

    t.equal("Hello Cruel World Of Earth 1", helpers.title(str));
});

test('encode url string', function (t) {
    t.plan(2);

    str = "http://www.example.com";

    t.comment("setup source: " + str);

    t.equal(typeof str, 'string');

    t.equal("http%3A%2F%2Fwww.example.com", helpers.url(str));
});

test('add current date formated', function (t) {
    t.skip("not implemented");
    t.end();
});

test('encode url string', function (t) {
    t.plan(2);

    str = "<div>Hello</div><br/>";

    t.comment("setup source: " + str);

    t.equal(typeof str, 'string');

    t.equal("Hello", helpers.striptags(str));
});
