# Mandrill Template Helpers

Mandrill supports a few helpers that are not included with
handlebars: upper, lower, title, url, date, striptags & unsub

This acts as a polyfill for those helpers allowing you to build
and test your templates locally before publishing

## Installation

    npm install mandrill-template-helpers --save

## Test

    npm test

## Usage

In your code

```
var hb = require('handlebars');
var mandrill-helpers = require('mandrill-template-helpers');

hb.registerHelper(mandrill-helpers);

...

var template = hb.compile('./template.html');

```

in your `./template.html` do

```
    {{#if shout_out}}
        {{upper shout_out}}!
    {{/if}}

```

if `shout_out` was *hello* then it would return *HELLO*

### Inline Helpers Available in Mandrill

From Mandrill...

|Helper | Function | Example|
|---|---|---|
|upper| uppercase the text provided | `{{upper "your text"}}` results in: YOUR TEXT |
|lower| lowercase the text provided | `{{lower "your text"}}` results in: your text |
|title|title-case the text provided| `{{title "your text is neat"}}` results in: Your Text is Neat|
|url|urlencode the text provided|`{{url "http://yourawesomeurl.com"}}` results in: http%3A%2F%2Fyourawesomeurl.com|
|date|print the current date with a given format, defaults to d/m/Y| `{{date "Y-m-d"}}` results in: 2015-03-10|
|striptags|strip any HTML tags from the given data|`{{striptags "<p>your text</p>"}}` results in: your text|

Mandrill also offers another helper, {{unsub}} to add an automatic unsubscribe link to your emails. Generally, you would add the unsub helper in handlebars as {{unsub "http://redirecturl.com"}} where you pass the URL directly in the helper and the URL must be enclosed in double quotes. For example:

    <a href='{{unsub "http://redirecturl.com"}}'>Unsubscribe</a>

You can also pass the redirect URL as a merge_var:

    <a href='{{unsub redirect_merge_var}}'>Unsubscribe</a>

with the merge var defined as:

```
   "global_merge_vars": [
        {
            "name": "redirect_merge_var",
            "content": "http://yourdomain.com"
        }
    ]
```

Note: When using the `{{unsub}}` helper inside of an anchor tag, be sure to use single quotes around for the `href='{{unsub }}'`.

> see: [Using-Handlebars-for-Dynamic-Content](https://mandrill.zendesk.com/hc/en-us/articles/205582537-Using-Handlebars-for-Dynamic-Content)

## Todo

- implement `date` helper
- create placeholder for `unsub`

## LICENCE

MIT
