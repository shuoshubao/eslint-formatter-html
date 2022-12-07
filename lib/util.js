export const isEmptyArray = arr => {
  return Array.isArray(arr) && arr.length === 0
}

export const formatTime = (date, format = 'YYYY-MM-DD') => {
  const dt = new Date(+date || +new Date(date))
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const day = dt.getDate()
  const hour = dt.getHours()
  const minute = dt.getMinutes()
  const second = dt.getSeconds()

  const parse = {
    YYYY: year,
    MM: month,
    DD: day,
    HH: hour,
    mm: minute,
    ss: second
  }

  parse.yyyy = parse.YYYY
  parse.dd = parse.DD
  parse.hh = parse.HH

  // pad zero
  Object.entries(parse).forEach(([k, v]) => {
    parse[k] = String(v).padStart(2, 0)
  })

  return Object.entries(parse).reduce((prev, [k, v]) => {
    return prev.replace(k, v)
  }, format)
}
