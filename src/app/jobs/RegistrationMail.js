const Mail = require('../lib/Mail')

module.exports = {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data
    await Mail.sendMail({
      from: 'Queue test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuario',
      html: `Olá ${user.name} `,
    })
  },
}
