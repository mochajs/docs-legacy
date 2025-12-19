# mochajs.org

These are the legacy docs for Mocha built using [Eleventy](https://www.11ty.io/), a simple static site generator.
They used to be served on [mochajs.org](https://mochajs.org); now they're served on [legacy.mochajs.org](https://legacy.mochajs.org).

## Development

1. Run `npm install` from working copy root to get Node.js deps.
1. To include the API documentation, run `npm run api` before the either of the following commands.
1. To serve the site and rebuild as changes are made, run `npm run watch`.
1. To rebuild the site _once_, run `npm run docs`.
1. To preview the site, run `npm run preview`.

### Notes

- The content lives in `index.md`; everything else is markup, scripts, assets, etc.
- This file (`README.md`) should _not_ be included in the build.
- `_site_` is where the deployed site lives. This directory is _not_ under version control.
