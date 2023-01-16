import bcrypt from 'bcryptjs'

const passEncrypt = async (pass) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(pass, salt)
}

export default passEncrypt
