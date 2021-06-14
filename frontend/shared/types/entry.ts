export interface EntryForm {
  descriptionShort: string
  descriptionLong: string
}

export type Entry = {
  entryID: string
  descriptionLong: string
  descriptionShort: string
  entryDate: Date
}
