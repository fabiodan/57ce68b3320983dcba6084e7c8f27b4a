echo Compressing fonts to /dist/assets/fonts/fonts.zip... &&
npx bestzip ./dist/assets/fonts/asda-fonts.zip ./dist/assets/fonts/source-sans-pro*.* &&
echo Compressing icons to /dist/assets/images/icons.zip... &&
npx bestzip ./dist/assets/images/asda-icons.zip ./src/components/icon/images/*.* &&
echo Compressing done.
