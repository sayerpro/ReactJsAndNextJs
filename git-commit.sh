#!/bin/bash

current_branch=$(git branch --show-current)

git add .
read -p "Enter commit message: " message
git commit -m "$message"
git pull origin $current_branch
git push origin $current_branch
git checkout master
git pull origin master
git merge $current_branch
git push origin master
git checkout $current_branch
