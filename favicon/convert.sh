
convert cc.png  -background white \
          \( -clone 0 -resize 16x16 -extent 16x16 \) \
          \( -clone 0 -resize 24x24 -extent 24x24 \) \
          \( -clone 0 -resize 32x32 -extent 32x32 \) \
          \( -clone 0 -resize 48x48 -extent 48x48 \) \
          \( -clone 0 -resize 64x64 -extent 64x64 \) \
          \( -clone 0 -resize 110x110 -extent 110x110 \) \
          \( -clone 0 -resize 114x114 -extent 114x114 \) \
          -delete 0 -alpha off -colors 256 favicon.ico

