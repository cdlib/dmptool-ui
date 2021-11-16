# Make sure all dependencies are installed
npm install
# Build the assets
npm run build

# Copy over all assets to the Rails app
mkdir -p ../dmptool/public/dmptool-ui
cp -f dist/ui-assets/*.* ../dmptool/public/dmptool-ui/

# Copy all fonts over to the DMPTool assets directory
cp dist/ui-assets/SourceSans3VF-Italic.ttf.*.woff2 ../dmptool/app/assets/fonts/SourceSans3VF-Italic.ttf.woff2
cp dist/ui-assets/SourceSans3VF-Italic.ttf.*.woff ../dmptool/app/assets/fonts/SourceSans3VF-Italic.ttf.woff
cp dist/ui-assets/SourceSans3VF-Roman.ttf.*.woff2 ../dmptool/app/assets/fonts/SourceSans3VF-Roman.ttf.woff2
cp dist/ui-assets/SourceSans3VF-Roman.ttf.*.woff ../dmptool/app/assets/fonts/SourceSans3VF-Roman.ttf.woff

