#!/bin/env bash

yarn doc
git checkout gh-pages
mv -f doc/8 ./
git add .
git commit -m "update"
git push
git checkout -