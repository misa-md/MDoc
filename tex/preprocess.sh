#!/bin/sh
set -e
MAX_SEARCH_DEPTH=8
BASE_TEX_DIR=_markdown_docs
dir="./"  # input dir as first arg.
with_minted="OFF"

if [ "$1" != "" ]; then
    dir=$1
fi
if [ "$2" = "--minted" ]; then
    echo "minted highlighing is enabled."
    with_minted="ON"
fi

base_path="$(cd "$dir" && pwd -P)"  # where is the project home

mkdir -p $BASE_TEX_DIR
for path in $(find $base_path -maxdepth $MAX_SEARCH_DEPTH -type d  )
do
    #Do something, the directory is accessible with $d:
    abs_path="$(cd "$path" && pwd -P)" #  relative path to absolute path
    md_files=$(find "$abs_path" -maxdepth 1 -name "*.md")
    for md_file in $md_files # for each md file in a directory.
    do
        md_full_filename=$(basename $md_file)
        filename="${md_full_filename%.*}"
        if [ "$with_minted" = "OFF" ];  then
            pandoc $md_file -o _markdown_docs/$(basename $filename.tex) --listings
        else
            pandoc --filter pandoc-minted $md_file -o _markdown_docs/$(basename $filename.tex)
        fi
    done
done
