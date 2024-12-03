import { User } from "../model/user.js";

const userExist = async (request, response) => {
  const { email, password } = request.body;
  try {
    const allUser = await User.find();
    const isExistedUser = allUser.filter((user) => {
      if (user.email === email) {
        if (user.password === password) {
          return user;
        }
      }
    });

    if (isExistedUser.length > 0) {
      response.json({ success: true, data: isExistedUser });
    } else {
      response.json({ success: false });
    }
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

const createUser = async (request, response) => {
  const { email, password, name, phoneNumber } = request.body;
  try {
    const result = await User.create({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};
const getAllUsers = async (request, response) => {
  try {
    const result = await User.find();

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

export { createUser, getAllUsers, userExist };
