#!/bin/sh

set -eu

echo "Запускаю установку модулей"
npm i
echo "Запускаю билд"
npm run build

echo "Билд готов..."

echo "Удаляю node_modules..."

rm -r node_modules

echo "Готово..."