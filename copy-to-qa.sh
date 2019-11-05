echo Deleting .DS_Store files... &&
sh rm-dstore.sh &&
echo
echo Deleting /assets/ folder from www.asda.com-static-assets-stage/design/... &&
rm -rf ~/Projects/www.asda.com-static-assets-stage/design/assets/ &&
echo Assets deleted
echo
echo Copying /dist/ folder to www.asda.com-static-assets-stage/design/... &&
cp -R ~/Projects/asda-design-system/dist/ ~/Projects/www.asda.com-static-assets-stage/design/ &&
echo Done
