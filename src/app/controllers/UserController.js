const Mail = require('../lib/Mail')
const Queue = require('../lib/Queue')
module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password,
    }
    await Queue.add({ user })
    
    return res.json(user)
  },
}
