# codex-eleventy

A quick setup for an [Eleventy](https://www.11ty.dev/) project.

Creates a directory structure `src/templates`, including subdirectories `_data` and `_partials`.

This includes several filters, transforms, and shortcodes, and also adds a small list of Eleventy plugins.

The options, watch targets, and passthrough copy paths are highly opinionated, in that they are what I want them to be.

## Useage

The `postinstall` script provides a starter version of `.eleventy.js`. Running `npx @11ty/eleventy` will run this bare bones Eleventy config in your project root.

If you want to use your own filters, options, etc., simply change the `require` path in your copy of `.eleventy.js` to point at your versions, and you're all set.

If you'd like to build on the included filters--and why wouldn't you, there's not a lot here--you'll add your own versions of the included files and update the `require` paths in `.eleventy.js` accordingly. Then inside your versions, you'll want something like this:

```js
const { filters } = require('codex-eleventy');

/* ... */

module.exports = {
	/* all your lovely additions */
	...filters,
};
```

## Included Filters

- `htmlDateString`: accepts a `Date()`, returns `LLLL d, yyyy` formatted string. Example: `'January 1, 2020'`
- `machineTime`: accepts a `Date()`, returns `yyyy-LL-dd` formatted string. Example: `'2020-01-01'`. This is useful for `time[datetime]`.
- `RSSTimeFormat`: accepts a `Date()`, returns ISO 8601-compliant string. Example: `'1982-05-25T00:00:00.000Z'`
- `machineTimeISO`: this is the exact same thing as `RSSTimeFormat`. I do not know why I haven't simplified this. Fun.
- `trim`: accepts a `string`, returns the string trimmed of either whitespace or a given character (`chr`). Looking at it, it doesn't look like it works though. That's a todo.
- `date`: accepts a `Date()` and an optional `format` (default: `yyyy-mm-dd`), returns formatted `String()`
- `babek`: accepts a `Kebab`-ed `string`, returns reversed to a properly spaced `string`
- `lemac`: accepts a `Camel`-ed `string`, returns reversed to a properly spaced `string`

## Included Plugins

- @11ty/eleventy-plugin-rss

## Included Shortcodes

- `timestamp`: accepts a local file `Path` and returns the path with the filename cachebusted. Example: input `'assets/js/main.min.css'`, output `assets/js/main.min.${modifiedtime}.css`. This uses `src/lib/filemtime.js`.

## Included Transforms

- `htmlmin`: takes all output files that end with `.html` and minifies them using [html-minifer].

