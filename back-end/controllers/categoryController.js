import { Category } from "../model/category.js";
const createCategory = async (request, response) => {
  const result = await Category.create({
    name: "Dessert",
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllCategory = async (request, response) => {
  const result = await Category.find();

  response.json({
    success: true,
    data: result,
  });
};
const deleteCategory = async (request, response) => {
  const result = await Category.findByIdAndRemove({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};
const updateCategory = async (request, response) => {
  const result = await Category.findByIdAndUpdate({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { getAllCategory, createCategory, deleteCategory, updateCategory };
