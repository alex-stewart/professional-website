#!/usr/bin/env sh

set -e

yarn build

cd dist

echo 'www.alestew.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:alex-stewart/alex-stewart.github.io.git master