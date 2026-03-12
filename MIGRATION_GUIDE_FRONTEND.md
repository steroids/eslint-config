# Migration Guide

> ⚠️ Гарантированный успех миграции — **только на версии `@steroidsjs/webpack@^4.1.0`** и выше.
> На других версиях работоспособность не гарантируется.

---

## 1. Подготовка проекта

Перед началом убедитесь, что в проекте **нет незакоммиченных изменений**:

```bash
git commit
# или
git stash
```

---

## 2. Обновление React-импортов

В корне проекта выполните команду:

```bash
npx react-codemod update-react-imports
```

> ⚠️ Возможно, команду придётся запустить **дважды**, если при первом запуске будет предложена установка пакета.

### Во время выполнения:

1. Выберите директорию:

   ```
   ./src/
   ```
2. Выберите язык:

   ```
   TypeScript
   ```

---

## 3. Проверка импортов

После выполнения codemod **обязательно проверьте проект поиском**, чтобы убедиться, что не осталось устаревших импортов, например:

```ts
import React from 'react';
import * as React from 'react';
```

И других их вариаций.

---

## 4. Обновление `tsconfig.json`

В файле `tsconfig.json` замените:

```json
"jsx": "react"
```

на:

```json
"jsx": "react-jsx"
```

---

## 5. ESLint (временные меры)

### 5.1 Временное правило

Если этот шаг выполняется **до обновления `@steroidsjs/eslint-config` до версии `3.0.3` и выше**, добавьте в `.eslintrc` следующее правило:

```js
{
    "extends": "@steroidsjs/eslint-config/frontend",
    "rules": {
        // Временное правило. Удалить после перехода на @steroidsjs/eslint-config@3.0.3 и выше
        "prettier/prettier" : "off",
        // Временное правило. Удалить после перехода на @steroidsjs/eslint-config@3.0.3 и выше
        "react/react-in-jsx-scope": "off"
    }
}
```

---

### 5.2 Форматирование

В корне проекта выполните:

```bash
yarn lint --fix
```

> ⚠️ Это необходимо, так как у скрипта отличается форматирование, в том числе в файлах формата **Markdown (MD)**.

---

## 6. ESLint: запрет импорта React в JSX

Если вы хотите **полностью запретить использование импорта `React` для JSX** и перейти на новый JSX runtime (React 17+), укажите в `.eslintrc`:

```json
"extends": [
  "@steroidsjs/eslint-config/frontend",
  "plugin:react/jsx-runtime"
]
```

### Примечание

* `plugin:react/jsx-runtime` **не является отдельным пакетом** — это preset из `eslint-plugin-react`.
* `eslint-plugin-react` уже установлен в пакет `@steroidsjs/eslint-config`, но если ESLint выдаёт ошибку, что плагин не найден, установите его вручную:

```bash
yarn add -D eslint-plugin-react
# или
npm install -D eslint-plugin-react
```
