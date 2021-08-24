# Make sure all dependencies are installed
npm install
# Build the assets
npm run build

# Copy all images over to the DMPTool assets directory
cp dist/ui-assets/*.ico ../dmptool/app/assets/images
cp dist/ui-assets/*.svg ../dmptool/app/assets/images
cp dist/ui-assets/*.jpg ../dmptool/app/assets/images

# Copy all fonts over to the DMPTool assets directory
cp dist/ui-assets/SourceSans3VF-Italic.ttf.*.woff2 ../dmptool/app/assets/fonts/SourceSans3VF-Italic.ttf.woff2
cp dist/ui-assets/SourceSans3VF-Italic.ttf.*.woff ../dmptool/app/assets/fonts/SourceSans3VF-Italic.ttf.woff
cp dist/ui-assets/SourceSans3VF-Roman.ttf.*.woff2 ../dmptool/app/assets/fonts/SourceSans3VF-Roman.ttf.woff2
cp dist/ui-assets/SourceSans3VF-Roman.ttf.*.woff ../dmptool/app/assets/fonts/SourceSans3VF-Roman.ttf.woff

# Copy all stylesheets over to the DMPTool assets directory
cp dist/ui-assets/*.css ../dmptool/app/assets/stylesheets/vendor/dmptool-ui.css

# Copy all javascripts over to the DMPTool assets directory
cp dist/ui-assets/*.js ../dmptool/app/javascript/vendor/dmptoolUi.js
