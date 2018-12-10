. $(dirname "$0")/.ask.sh

promptExecSql() {
    local prompt reply

    while true; do

        clear
        cat README

        # Ask the question (not using "read -p" as it uses stderr not stdout)
        echo 'Choisissez un fichier à exécuter parmi :'
        find ./src/client -name '*.sql' -printf "- %f\n" | cut -d'.' -f1
        echo -n "Reponse : "

        # Read the answer (use /dev/tty in case stdin is redirected from somewhere else)
        read reply </dev/tty

        file=`find ./src/client -name $reply.sql`
        echo $file
        if [ -z "$file" ]; then
          echo "Ce fichier n'existe pas"
        else
          ./.run.sh $file
          if ask "Exécuter un autre fichier ?"; then
            :
          else
            return 1
          fi
        fi
    done
}
