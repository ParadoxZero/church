npm run build
git checkout gh-pages
cp -r dist/* .
rm -r dist/*
git add *
git commit -m "Updates: $(date)" -a
git push
git checkout master
