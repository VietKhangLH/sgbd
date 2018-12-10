#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'il faut un fichier sql en param'
    exit 0
fi

sqlplus -s /nolog << EOF
connect vklho/shellcode;

column name format a10
column address format a20
column telephone format 999999999
set linesize 100 pagesize 50


@$1

exit;
EOF

