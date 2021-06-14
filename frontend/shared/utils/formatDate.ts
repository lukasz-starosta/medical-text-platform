export function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return `${getPrependedDay(date)}.${getPrependedMonth(date)}.${date.getFullYear()}`
}

export function getPrependedDay(date: Date): string {
  return prependWithZero(date.getDate())
}

export function getPrependedMonth(date: Date): string {
  return prependWithZero(date.getMonth() + 1)
}

export function prependWithZero(num: number): string {
  return ('0' + num).slice(-2)
}
