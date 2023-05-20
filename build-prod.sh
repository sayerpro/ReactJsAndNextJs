#!/bin/bash

read -p "Change userImmer to immer? (y/n)" answer
read -p "Delete ReactStrictMode? (y/n)" answer2
read -p "UnComment rules in file .eslintrc.json? (y/n)" answer3

if [[ "$answer" = "y" || "$answer" = "Y" ]] && [[ "$answer2" = "y" || "$answer2" = "Y" ]] && [[ "$answer3" = "y" || "$answer3" = "Y" ]]; then
    echo "Executing lint..."
    npm run lint && echo "Lint passed. Executing build..." && npm run build || echo "Lint failed. Build canceled."
else
    echo "Cancel build."
fi
