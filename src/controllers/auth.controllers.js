import User from "../models/User";
import Role from "../models/Role";
import passEncrypt from "../utils/pass.encrypt";
import jwtEncrypt from "../utils/jwt.encrypt";

export const signUpUser = async (req, res) => {
  console.log('signinreq', req)
  // generic response
  const response = {
    success: false,
    message: '',
    data: null
  }
  // send response
  res.status(response.success ? 200 : 400).json(response)
}

export const signInUser = async (req, res) => {
  try {
    const {username, email, password, roles} = req.body
    const roleSearch = await Role.find({name: {$in: roles}})
    const hashPass = await passEncrypt(password)

    const newUser = await new User({
      username,
      email,
      password: hashPass,
    })

    if (roleSearch) newUser.roles = roleSearch.map(r => r._id)
    if (!roleSearch.length) newUser.roles = await Role.findOne({name: 'driver'})

    const saveUser = await User.create(newUser)
    const token = await jwtEncrypt(saveUser._id)

    // generic response
    const response = {
      success: false,
      message: '',
      data: null,
      token
    }
    // send response
    res.status(response.success ? 200 : 400).json(response)

  } catch (err) {
    console.log(err)
  }
}