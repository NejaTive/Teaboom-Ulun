# Карточка товара «Ананасовый улун» — тестовое задание Teaboom.ru

Статическая вёрстка верхней части карточки товара интернет-магазина [Teaboom.ru](https://teaboom.ru/product/ananasovij-ulun).

## Запуск

### Docker Compose

```bash
docker compose up -d --build
```

Открыть [http://localhost:8088](http://localhost:8088).

Остановить:

```bash
docker compose down
```

### Без Docker

Сервер не обязателен — достаточно открыть `index.html` (стили уже в `css/styles.css`):

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Или локальный статический сервер из папки проекта:

```bash
npx --yes serve .
# или
python -m http.server 8080
```

Затем открыть `http://localhost:3000` / `http://localhost:8080`.

## Стили (SCSS)

Исходники лежат в `scss/`. Скомпилированный CSS — в `css/styles.css` (его подключает `index.html`).

```bash
npm install
npm run build:css    # однократная сборка
npm run watch:css    # следить за изменениями
```

## Структура

```
├── index.html
├── scss/ …              # исходники стилей
├── css/styles.css       # собранный CSS
├── js/main.js
├── images/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
└── README.md
```