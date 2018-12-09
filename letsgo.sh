#!/bin/sh
. $(dirname "$0")/.ask.sh
. $(dirname "$0")/.check.sh
clear
cat README

if ask "Voulez-vous régénérer la base ?"; then
  if check node; then
    cd src/creation && node . && cd ../../
  fi
fi

cp src/creation/bd.sql .
