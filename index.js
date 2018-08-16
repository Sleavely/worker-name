const os = require('os')

module.exports = (() => {
  // Manual override
  if(process.env.WORKER_NAME)
  {
    return process.env.WORKER_NAME
  }

  // Heroku
  if(process.env.DYNO)
  {
    // If dyno metadata is enabled, use that
    if(process.env.HEROKU_APP_NAME)
    {
      return `${process.env.HEROKU_APP_NAME}_${process.env.DYNO}`
    }
    // Heroku regular dynos return a GUID as their hostname
    return `${os.hostname()}`
  }

  // Fall back to random 6-character hex after the system name
  const randomHex = '0123456789abcdef'.split('').map((v,i,a) => {
    return i>5 ? null : a[Math.floor(Math.random()*16)]
  }).join('')

  return `${os.hostname()}-${randomHex}`
})()
