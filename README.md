alfa-leasing-requests-ui
=================

Как запустить? (разработческий режим)
-------------------------------------

1. `npm i`
2. `npm start`
3. `open http://localhost:8080` (или руками в браузере)

Сборка проекта в production режиме
----------------------------------

1. `npm i`
2. `npm run build`
3. После чего можно проверить сборку командой `NODE_ENV=production node ./.build/server.js`

Автоматические проверки кода
----------------------------

Перед каждым коммитом код проверяется `eslint`, `stylelint` и `jest`.

Ручной запуск проверки кода линтерами и юнит тестами `npm test`.

Запуск unit-тестов `npm run jest`.

Сборка проекта в контейнер
--------------------------

`npm run docker-build`

Настройки команд сборки
-----------------------

Для запуска режима разработки и сборки используется [arui-scripts](http://git/projects/EF/repos/arui-scripts/browse).
Подробнее о его настройке и использовании вы можете почитать в его документации.

Типы коммитов в репозитории
-----------------------

* feat: Commits related to a new feature developed
* fix: Commits related a bug fix
* style: Commits related to styling in .css, .scss, .etc files.
* cleanup: Commits related to changes that do not affect the logic of the code (white-space, formatting, missing semi-colons, dead code removal, etc.)
* refactor: Commits related to changes that neither fixes a bug nor adds a feature but is used for restructuring the code
* perf: Commits related to changes that improves performance
* test: Commits related to adding missing tests or fixing them
* chore: Commits related to changes in build process, auxiliary tools and libraries such as documentation generation
* docs: Commits related to documentation changes, such as Readme.md file
