#!/bin/sh

rm -rf .output_temp
cp -r .output .output_temp

# quickly move .output -> .output_live
[ ! -d .output_live ] || mv .output_live .output_old
mv .output_temp .output_live

rm -rf .output_old
