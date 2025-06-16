git add . --all
VERSION=$(npm run version --silent)
git commit -am"publish new version $VERSION"
git tag $VERSION -m "new version"
git push
git push --tags