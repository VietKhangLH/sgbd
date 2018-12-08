#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'il faut un fichier sql (sans extension)'
    exit 0
fi

sqlplus -s /nolog << EOF
connect vklho/shellcode;

set lin 150
set wrap on

@$1

exit;
EOF

