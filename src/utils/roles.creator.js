import Role from "../models/Role";

const roleCreator = async () => {
  try {
    const count = await Role.estimatedDocumentCount()
    if (count > 0) return console.log('The roles where previously created')

    return await Promise.all([
      Role.create({name: 'driver'}),
      Role.create({name: 'rider'}),
      Role.create({name: 'admin'})
    ]).then(r => console.log('The roles are created for first time', r))

  } catch (err) {
    console.log(err)
  }
}

export default roleCreator