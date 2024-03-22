echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r dist/* root@128.199.214.103:/var/www/html/
echo "Done!"