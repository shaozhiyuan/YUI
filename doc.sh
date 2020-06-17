#!/bin/env bash

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -am "update"
git push
git checkout -