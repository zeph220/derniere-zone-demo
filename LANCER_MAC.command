#!/bin/bash
cd "$(dirname "$0")"
PORT=5174
URL="http://127.0.0.1:$PORT/"
if command -v open >/dev/null 2>&1; then open "$URL"; fi
if command -v python3 >/dev/null 2>&1; then python3 -m http.server "$PORT" --bind 127.0.0.1; elif command -v python >/dev/null 2>&1; then python -m SimpleHTTPServer "$PORT"; else echo "Python n'est pas installe. Installe Python 3 ou lance un serveur local dans ce dossier."; read -p "Appuie sur Entree pour quitter..."; fi
