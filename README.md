# Mandrill Template Helpers (WIP)

> Do NOT use this;)

Mandrill supports a few helpers that are not included with
handlebars: upper, lower, title, url, date, striptags & unsub

This acts as a polyfill for those helpers

## Installation

    npm install mandrill-template-helpers --save

## Usage

TBD

### Inline Helpers Available in Mandrill

From Mandrill...

|Helper | Function | Example|
|---|---|---|
|upper| uppercase the text provided | `{{upper "your text"}}` results in: YOUR TEXT |
|lower| lowercase the text provided | `{{lower "your text"}}` results in: your text |
|title|title-case the text provided| `{{title "your text is neat"}}` results in: Your Text is Neat|
|url|urlencode the text provided|`{{url "http://yourawesomeurl.com"}}` results in: http%3A%2F%2Fyourawesomeurl.com|
|||

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

## LICENCE

MIT
