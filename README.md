# eslint-config

Репозиторий содержит файлы конфигурации для eslint.

## Установка конфигов

Проекты подтягивают этот репозиторий через npm-зависимость.

Ссылка на конфиг прописывается в `.eslintrc` проекта

Для фронтенда:
```json
{
    "extends": "@steroidsjs/eslint-config/frontend"
}
```

Для бэкенда:
```json
{
    "extends": "@steroidsjs/eslint-config/backend"
}
```

При использовании старого пути `@steroidsjs/eslint-config` вы будете получать ошибку:
```
The path '@steroidsjs/eslint-config' is no longer supported. Use '@steroidsjs/eslint-config/frontend' for frontend or '@steroidsjs/eslint-config/backend' for backend.
```

### ⚠️ Миграция для фронтенда

**[Руководство по миграции для фронтенда](MIGRATION_GUIDE_FRONTEND.md)**