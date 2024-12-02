import { User } from "../model/user.js";

const createUser = async (request, response) => {
  try {
    const result = await User.create({
      name: "jwz",
      email: "jwz@gmail.com",
      password: "Pass123",
      phoneNumber: "99990000",
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export { createUser, getAllUsers };
