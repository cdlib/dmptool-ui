# Move into the dmptool repo and run Bundler to install dependencies
echo 'Installing dependencies ...'
cd ../dmptool && bundle install

# run the Rails asset compilation
echo 'Compiling assets ...'
bin/rails assets:clobber && bin/rails assets:precompile

# Copy over the generate CSS file
echo 'Copying CSS file ...'
cp public/assets/application-*.css ../dmptool-ui/dmptool_html.css
