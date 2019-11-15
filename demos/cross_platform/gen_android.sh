#!/bin/bash
cd $(dirname $0)
node gen.js android
rm -rf ./android/project/app/src/test/java/tests/
mv ./android/project/app/src/foam_gen/tests ./android/project/app/src/test/java/tests/
