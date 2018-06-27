GREEN='\033[0;32m'
LBLUE='\033[1;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${LBLUE}Building The website...${NC}"
npm run build
echo -e "${LBLUE}Transfering files to gh-pages...${NC}"
git checkout gh-pages
if [ $? -ne 0 ]; then
  echo -e "   ${RED}Checkout failed.. Aborting!${NC}"
  echo -e "${YELLOW}Please ensure the master branch is up to date.${NC}"
  exit
fi
cp -r dist/* .
rm -r dist/*
echo -e "${LBLUE}Commiting new files...${NC}"
git add *
git commit -m "Updates: $(date)" -a
git push
git checkout master
echo -e "${GREEN}Deploy Complete.${NC}"

