const Queue = require('bull')
const redisConfig = require('../../config/redis')

const RegistrationMail = require('../jobs/RegistrationMail')

const mailQueue = new Queue(RegistrationMail.key, redisConfig)

mailQueue.on('failed', (job, err) => {
  console.log('Job failed', job.name, job.data)
  console.log('Erro:', err)
})

module.exports = mailQueue
