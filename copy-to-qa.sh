echo Deleting .DS_Store files... &&
./rm-destore.sh
echo Deleting /assets/ folder from www.asda.com-static-assets-stage/design/... &&
rm -rf ~/Projects/www.asda.com-static-assets-stage/design/assets/ &&
echo Copying /dist/ folder to www.asda.com-static-assets-stage/design/... &&
cp -R ~/Projects/asda-design-system/dist/ ~/Projects/www.asda.com-static-assets-stage/design/ &&
echo Done
