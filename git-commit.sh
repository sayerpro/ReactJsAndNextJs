#!/bin/bash

git add .
read -p "Enter commit message: " message
git commit -m "$message"
git pull origin develop
git push origin develop
git checkout master
git pull origin master
git merge develop
git push origin master
git checkout develop
