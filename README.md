# Карточка товара «Ананасовый улун» — тестовое задание Teaboom.ru

Статическая вёрстка верхней части карточки товара интернет-магазина [Teaboom.ru](https://teaboom.ru/product/ananasovij-ulun).

## Запуск

Сервер не обязателен — достаточно открыть файл (стили уже скомпилированы в `css/styles.css`):

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
product-card/
├── index.html
├── scss/
│   ├── styles.scss
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _product.scss
│   └── _responsive.scss
├── css/styles.css
├── js/main.js
├── images/
├── package.json
└── README.md
```