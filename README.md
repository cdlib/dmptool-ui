# dmptool-ui

The UI for the DMPTool Website

View at: https://cdlib.github.io/dmptool-ui/

## Installation

Requires Node, npm.

1. Add a **.npmrc** file to the root containing a Font Awesome token. Use the "Per-Project" configuration example from: https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers. The installation will fail if this file/token is missing.

This enables the Pro version of Font Awesome to be installed, which includes the Pro versions of icons used in the UI.

2. Run `npm install`

## Developing

1. Run `npm run serve`

This will watch and compile **/src/.hbs**, **.scss**, **.js**, and **/images/** files as you work on them.

The UI can usually be seen locally at http://localhost:3000. To test the UI on other devices (phone, tablet, etc.), use the Network URL listed in the CLI at first run.

## Building

1. Run `npm run build`

This will create a finished build of all components and pages of this UI at **/dist/**

All UI assets, including minified images, compiled CSS & JS, and font files are copied to **/dist/ui-assets/**.

The **/ui-assets/** folder and its contents should be copied to your app/website root when integrating this UI into your actual project.

## Publishing to GitHub Pages

This requires [GitHub Pages](https://pages.github.com) to be configured.

1. Run `npm run publish` to publish a finished build of this UI to GitHub Pages.
