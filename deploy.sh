echo "Building The website..."
npm run build
echo "Transfering files to gh-pages..."
git checkout gh-pages
cp -r dist/* .
rm -r dist/*
echo "Commiting new files..."
git add *
git commit -m "Updates: $(date)" -a
git push
git checkout master
echo "Deploy Complete."
