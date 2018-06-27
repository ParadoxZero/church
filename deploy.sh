GREEN='\033[0;32'
RED='\033[0;31m'
NC='\033[0m'

echo "${GREEN}Building The website..."
npm run build
echo "Transfering files to gh-pages..."
git checkout gh-pages
if [ $? -neq 0 ]; then
  echo "${RED}Checkout failed.. Aborting${NC}"
fi
cp -r dist/* .
rm -r dist/*
echo "Commiting new files..."
git add *
git commit -m "Updates: $(date)" -a
git push
git checkout master
echo "Deploy Complete."
