import { User } from "../model/user.js";

const createUser = async (request, response) => {
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
};
const getAllUsers = async (request, response) => {
  const result = await User.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
