export interface EntryForm {
  descriptionShort: string
  descriptionLong: string
}

export type Entry = {
  id: string
  descriptionLong: string
  descriptionShort: string
  entryDate: { seconds: number }
  problems: string[]
  tests: string[]
  treatments: string[]
}
