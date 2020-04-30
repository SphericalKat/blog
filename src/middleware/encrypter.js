import AesPassword from 'aes-psswd'

const encrypter = new AesPassword(process.env.AESPASSWORD1, process.env.AESPASSWORD2)

module.exports = encrypter
