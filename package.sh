#!/bin/bash

script_content=$(cat lib/index.js)

script_tag="<script type=\"text\/javascript\" src=\"lib\/index.js\"><\/script>"

sed -e '/\/\/Script/ {' -e 'r lib/index.js' -e 'd' -e '}' index.tpl.html > index.html
