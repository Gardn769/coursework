const { userModel } = require('../models/user');

async function create(data) {
  const {email, password, name, contactPhone} = data;
  try {
    const user = await findByEmail(email);
    if (user) {
      throw {
        error: 'Пользователь уже существует',
        status: 'error',
      }
    }
    const passwordHash = createHash('md5').update(password).digest('hex');
    const newUser = new userModel({
      name,
      passwordHash,
      email,
      contactPhone,
    });
    return newUser.save()
  } catch (error) {
    console.error(error);
  }
}

function findByEmail(email) {
  try {
    const user = userModel.findOne({ email }).select('-__v');
    return user;
  } catch (error) {
    console.error(error);
  }
}

function findById(id) {
  try {
    const user = userModel.findById(id);
    return user;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {create, findByEmail, findById }
