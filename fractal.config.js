const path = require('path');

/* Create a new Fractal instance */
const fractal = module.exports = require('@frctl/fractal').create();

/* Title of Fractal project */
fractal.set('project.title', 'DMPTool UI');

// Fractal components location:
fractal.components.set('path', path.join(__dirname, 'src'));

// Static asset folder for development:
fractal.web.set('static.path', path.join(__dirname, 'ui-assets'));

// Static asset folder for builds:
fractal.web.set('static.mount', 'ui-assets');

// Folder for complete builds:
fractal.web.set('builder.dest', __dirname + '/dist');

// Default template:
fractal.components.set('default.preview', '@template-tests');

// Mandelbrot theme with custom configuration:
const mandelbrot = require('@frctl/mandelbrot');

const customTheme = mandelbrot({
  skin: 'navy',
  panels: ['notes', 'view', 'context', 'resources', 'info', 'html']
});

fractal.web.theme(customTheme);
