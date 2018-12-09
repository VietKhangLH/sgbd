#!/bin/sh
. $(dirname "$0")/.ask.sh
. $(dirname "$0")/.check.sh
clear
cat README

check sqlplus

if ask "Voulez-vous régénérer la base ?"; then
  check node
  cd src/creation && node . && cd ../../
fi

cp src/creation/bd.sql .
