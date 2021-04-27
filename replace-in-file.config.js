/*****

This config uses the Replace in file utility: https://www.npmjs.com/package/replace-in-file

When run via postinstall script in package.json, it adds the 'style' attribute to the Font Awesome sprite paths.

This allows SVG fill colors to be set from background-image CSS properties using postcss-svg https://github.com/jonathantneal/postcss-svg

*****/ 

module.exports = {
  files: 'node_modules/@fortawesome/fontawesome-pro/sprites/*.svg',
  from: /<path d/g,
  to: '<path style="fill: var(--color, black);" d'
};
