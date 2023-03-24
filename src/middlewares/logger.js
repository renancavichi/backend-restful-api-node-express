const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${formatDate(new Date())}`)
  next()
}
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}

export default logger