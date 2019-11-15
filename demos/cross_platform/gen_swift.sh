#!/bin/bash
cd $(dirname $0)
node gen.js swift
rm -rf ./swift/foam_gen_test
mkdir ./swift/foam_gen_test
mv ./swift/foam_gen/test_* ./swift/foam_gen_test/
for f in ./swift/foam_gen_test/*; do
  sed '1i\
@testable import FOAM_Demo_App
' "$f" >"$f.bak" && mv "$f.bak" "$f"
done
