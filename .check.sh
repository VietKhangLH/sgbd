check () {
  if hash $1 2>/dev/null; then
    echo "✔️  $1 présent"
  else
    echo "⛔ $1 absent"
    exit 1
  fi
}
