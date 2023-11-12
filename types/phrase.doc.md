# Документация Проекта

## Структура Интерфейсов

### `Category`

Описывает категорию фразы.

- `id`: number - Уникальный идентификатор.
- `name`: string - Название категории.

### `Tag`

Описывает тег фразы.

- `id`: number - Уникальный идентификатор.
- `name`: string - Название тега.

### `Intonation`

Описывает интонацию фразы.

- `id`: number - Уникальный идентификатор.
- `name`: string - Название интонации.
- `description`: string - Описание интонации.

### `Phrase`

Описывает фразу.

- `id`: number - Уникальный идентификатор.
- `text`: string - Текст фразы.
- `categories`: Category[] - Массив категорий.
- `tags`: Tag[] - Массив тегов.
- `intonation`: Intonation - Интонация фразы.

## Структура Базы Данных

База данных состоит из следующих таблиц:

### Таблица `Phrases` (Фразы)

Содержит информацию о фразах.

- `id`: INT PRIMARY KEY AUTO_INCREMENT
- `text`: VARCHAR (Текст фразы)
- `intonation_id`: INT, FOREIGN KEY REFERENCES `Intonations(id)` (Ссылка на id интонации фразы)
- `created_at`: DATETIME (Дата создания записи)
- `updated_at`: DATETIME (Дата последнего обновления записи)

### Таблица `Categories` (Категории)

Содержит информацию о категориях, к которым могут быть отнесены фразы.

- `id`: INT PRIMARY KEY AUTO_INCREMENT
- `name`: VARCHAR (Название категории)
- `created_at`: DATETIME (Дата создания записи)
- `updated_at`: DATETIME (Дата последнего обновления записи)

### Таблица `Tags` (Теги)

Содержит информацию о тегах, которыми можно пометить фразы.

- `id`: INT PRIMARY KEY AUTO_INCREMENT
- `name`: VARCHAR (Название тега)
- `created_at`: DATETIME (Дата создания записи)
- `updated_at`: DATETIME (Дата последнего обновления записи)

### Таблица `Intonations` (Интонации)

Содержит описания различных интонаций для фраз.

- `id`: INT PRIMARY KEY AUTO_INCREMENT
- `description`: VARCHAR (Описание интонации)
- `created_at`: DATETIME (Дата создания записи)
- `updated_at`: DATETIME (Дата последнего обновления записи)

### Таблица `PhrasesCategories`

Является связующей таблицей, устанавливающей отношения между фразами и категориями.

- `phrase_id`: INT, FOREIGN KEY REFERENCES `Phrases(id)` (Ссылка на id фразы)
- `category_id`: INT, FOREIGN KEY REFERENCES `Categories(id)` (Ссылка на id категории)

### Таблица `PhrasesTags`

Является связующей таблицей, устанавливающей отношения между фразами и тегами.

- `phrase_id`: INT, FOREIGN KEY REFERENCES `Phrases(id)` (Ссылка на id фразы)
- `tag_id`: INT, FOREIGN KEY REFERENCES `Tags(id)` (Ссылка на id тега)
