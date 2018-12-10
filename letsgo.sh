#!/bin/sh
. $(dirname "$0")/.ask.sh
. $(dirname "$0")/.check.sh
. $(dirname "$0")/.promptExecSql.sh
clear
cat README

if check node && ask "Régénérer les requêtes de création ?"; then
  cd src/creation && node . && cd ../../
fi

clear
cat README

find ./src/client/ -name 'nbMonstro'

if check sqlplus; then
  if ask "Reset de la base avec les requêtes de création ?"; then
    ./.run.sh src/creation/bd.sql
  fi
else
  echo "Pas de sqlplus..."
  exit
fi

while promptExecSql; do
  :
done

