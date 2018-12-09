check() {
  if hash $1 2>/dev/null; then
    echo "✔️  $1 présent"
    return 0
  else
    echo "⛔ $1 absent"
    return 1
  fi
}