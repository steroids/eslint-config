# Migration Guide для backend

## Unreleased

### Удаление Prettier

Backend-конфиг больше не использует `prettier`, `eslint-plugin-prettier` и
`eslint-config-prettier`. Правило `prettier/prettier` удалено, а 48 ранее
отключённых стилистических правил `airbnb-base` снова активны.

Для миграции запустите:

```bash
yarn lint --fix
yarn lint
```

Автоматическое исправление поддерживают 46 из 48 правил. Вручную могут
потребоваться:

- `no-mixed-operators` — добавить скобки в выражения со смешанными операторами;
- `no-tabs` — заменить табуляцию пробелами.

Удалите из конфигурации проекта `prettier/prettier`, если правило было указано
явно.

### Если проект продолжает использовать Prettier

Установите Prettier и конфиг совместимости непосредственно в проект:

```bash
yarn add -D prettier eslint-config-prettier
```

Подключите `prettier` последним, чтобы отключить конфликтующие правила ESLint:

```json
{
    "extends": [
        "@steroidsjs/eslint-config/backend",
        "prettier"
    ]
}
```

Запускайте форматирование отдельно от ESLint:

```bash
yarn prettier --write .
```
