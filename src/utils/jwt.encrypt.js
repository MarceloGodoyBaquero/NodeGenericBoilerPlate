import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const jwtEncrypt = async (savedId) => {
  return await jwt.sign({id: savedId}, process.env.SECRET, {
    expiresIn: '1h'
  })
}

export default jwtEncrypt
