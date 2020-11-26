# wasaby-control-example
Репозиторий, который содержит эталонный пример разработки собственных контролов с использованием фреймворка Wasaby
#
## Сборка и запуск.

1. Клонируйте репозиторий с контролами, например в папку `wasaby-control-example` (все команды в следующих пунктах нужно будет выполнять в этой папке):

        git clone git@github.com:saby/wasaby-control-example.git /path/to/wasaby-control-example

1. Установите [Node.js](http://nodejs.org/) и [NPM](http://npmjs.com).

1. Установите зависимости:

        npm install
		
1. Загрузите платформенные модули:

        npx wasaby-cli --tasks=initStore

1. Cоберите проект:

        npx wasaby-cli --tasks=build
        
1. Запустите юинт тесты:

        npx wasaby-cli --tasks=startTest --node --report=console