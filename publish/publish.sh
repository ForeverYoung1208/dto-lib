git add . --all
git commit -am"publish new version $@"
VERSION=$(npm run version --silent)
git tag $VERSION -m "new version"
git push
git push --tags