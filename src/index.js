import app from './app'
import {connectDb} from './database'
import dotenv from 'dotenv'

dotenv.config()
const {PORT} = process.env
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
  connectDb().then(res => console.log('db connected', res))
})