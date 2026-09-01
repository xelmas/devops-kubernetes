const crypto = require('crypto')
const randomString = crypto.randomBytes(6).toString('hex')

const logRandomString = () => {
  const timestamp = new Date().toISOString()

  console.log(`${timestamp}: ${randomString}`)
}
logRandomString()

setInterval(logRandomString, 5000)
