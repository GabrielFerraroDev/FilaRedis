const Queue = require('./app/lib/Queue')
const RegistrationMail = require('./app/jobs/RegistrationMail')
Queue.process(RegistrationMail.handle)