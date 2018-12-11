#!/bin/sh
. $(dirname "$0")/.ask.sh
. $(dirname "$0")/.check.sh
. $(dirname "$0")/.promptExecSql.sh
clear
echo 'TESTS'

if check node && ask "Régénérer les requêtes de création ?"; then
  cd creation && node . && cd ../../
fi
exit
clear
echo 'TESTS'

if check sqlplus; then
  if ask "Reset de la base avec les requêtes de création ?"; then
    ./.run.sh creation/bd.sql
  fi
else
  echo "Pas de sqlplus..."
  exit
fi

while promptExecSql; do
  :
done

