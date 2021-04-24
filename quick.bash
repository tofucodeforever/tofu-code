#!/bin/bash

echo "Saving: $1"
make github && \
git add .
git commit -m "$1"
git push
