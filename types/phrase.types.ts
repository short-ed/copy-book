// interfaces/Category.ts
// interfaces/Phrase.ts
// import type { Category } from './Category'
// import type { Tag } from './Tag'
// import type { Intonation } from './Intonation'

// Пример использования интерфейсов
// import type { Phrase } from './interfaces/Phrase'

export interface Category {
  id: number
  name: string
}

// interfaces/Tag.ts
export interface Tag {
  id: number
  name: string
}

// interfaces/Intonation.ts
export interface Intonation {
  id: number
  name: string
  description: string
}

export interface Phrase {
  id: number
  text: string
  categories: Category[]
  tags: Tag[]
  intonation: Intonation
}

// const examplePhrase: Phrase = {
//   id: 1,
//   text: 'Пример фразы',
//   categories: [{ id: 1, name: 'Категория 1' }],
//   tags: [{ id: 1, name: 'Тег 1' }],
//   intonation: { id: 1, name: 'Интонация 1', description: 'Описание интонации 1' },
// }
