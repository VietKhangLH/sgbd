#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'il faut un fichier sql (sans extension)'
    exit 0
fi

sqlplus -s /nolog << EOF
connect vklho/shellcode;

whenever sqlerror continue none;
set echo off
set heading off
set line 150
set wrap off
@$1

exit;
EOF && echo $1.sql executé




