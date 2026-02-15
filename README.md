# evgeny_chekov

Статический сайт с портфолио.

## Локальная разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Результат сборки будет в папке `dist/`.

## Деплой

Автодеплой выполняется через GitHub Actions (`.github/workflows/deploy.yml`) при push в `main`.

Важно: в настройках репозитория GitHub включите **Pages Source: GitHub Actions**.

## Тесты

Для проверки корректности HTML‑файлов и наличия подключаемых ресурсов выполните:

```bash
pip install -r requirements.txt
pytest
```
