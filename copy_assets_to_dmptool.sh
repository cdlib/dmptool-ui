# Make sure all dependencies are installed
npm install
# Build the assets
npm run build

# Copy all images over to the DMPTool assets directory
cp dist/ui-assets/*.ico ../dmptool/app/assets/images
cp dist/ui-assets/*.svg ../dmptool/app/assets/images

cp dist/ui-assets/1-large.*.jpg ../dmptool/app/assets/images/hero/1-large.jpg
cp dist/ui-assets/2-large.*.jpg ../dmptool/app/assets/images/hero/2-large.jpg
cp dist/ui-assets/3-large.*.jpg ../dmptool/app/assets/images/hero/3-large.jpg
cp dist/ui-assets/4-large.*.jpg ../dmptool/app/assets/images/hero/4-large.jpg
cp dist/ui-assets/5-large.*.jpg ../dmptool/app/assets/images/hero/5-large.jpg

# Copy all fonts over to the DMPTool assets directory
# cp dist/ui-assets/*.wof* ../dmptool/app/assets/fonts

# Copy all stylesheets over to the DMPTool assets directory
cp dist/ui-assets/*.css ../dmptool/app/assets/stylesheets/vendor/dmptool-ui.css

# Copy all javascripts over to the DMPTool assets directory
cp dist/ui-assets/*.js ../dmptool/app/javascript/vendor/dmptoolUi.js
