#!/bin/sh
. $(dirname "$0")/.ask.sh
. $(dirname "$0")/.check.sh
. $(dirname "$0")/.promptExecSql.sh
clear
echo 'TESTS'

if check node && ask "Régénérer les requêtes de création ?"; then
  cd tst/creation && node . && cd ../../
fi

clear
echo 'TESTS'

if check sqlplus; then
  if ask "Reset de la base avec les requêtes de création ?"; then
    ./.run.sh tst/creation/bd.sql
  fi
else
  echo "Pas de sqlplus..."
  exit
fi

while promptExecSql 'tst'; do
  :
done

