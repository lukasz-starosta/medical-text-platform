import { formatDate, getPrependedDay, getPrependedMonth, prependWithZero } from './formatDate'

describe(formatDate.name, () => {
  it('formats the date properly', () => {
    const actual = formatDate('12 May 2020')
    const expected = '12.05.2020'

    expect(actual).toEqual(expected)
  })
})

describe(prependWithZero.name, () => {
  it('prepends single digit number with 0', () => {
    const actual = prependWithZero(1)
    const expected = '01'

    expect(actual).toEqual(expected)
  })

  it('does not prepend a double digit number', () => {
    const actual = prependWithZero(10)
    const expected = '10'

    expect(actual).toEqual(expected)
  })
})

describe(getPrependedDay.name, () => {
  it('returns proper day from date', () => {
    const actual = getPrependedDay(new Date('12 May 2020'))
    const expected = '12'

    expect(actual).toEqual(expected)
  })

  it('returns proper prepended day from date', () => {
    const actual = getPrependedDay(new Date('1 May 2020'))
    const expected = '01'

    expect(actual).toEqual(expected)
  })
})

describe(getPrependedMonth.name, () => {
  it('returns proper month from date', () => {
    const actual = getPrependedMonth(new Date('12 Dec 2020'))
    const expected = '12'

    expect(actual).toEqual(expected)
  })

  it('returns proper prepended month from date', () => {
    const actual = getPrependedMonth(new Date('1 May 2020'))
    const expected = '05'

    expect(actual).toEqual(expected)
  })
})
