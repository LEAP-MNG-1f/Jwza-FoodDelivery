import { Category } from "../model/category.js";
const createCategory = async (request, response) => {
  const { newCategory } = request.body;

  try {
    if (!newCategory || newCategory.trim() === "") {
      return response.status(400).json({
        success: false,
        message: "Category name is required and cannot be empty",
      });
    }
    const existedCategory = await Category.findOne({
      name: newCategory.toLowerCase(),
    });
    if (existedCategory) {
      return response.status(409).json({
        success: false,
        message: "Category name already exists",
      });
    }

    const result = await Category.create({
      name: newCategory.trim(),
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Category creation error:", error);
  }
};

const getAllCategory = async (request, response) => {
  try {
    const result = await Category.find();

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (request, response) => {
  try {
    const result = await Category.findByIdAndRemove({
      _id: "",
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateCategory = async (request, response) => {
  try {
    const result = await Category.findByIdAndUpdate({
      _id: "",
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllCategory, createCategory, deleteCategory, updateCategory };
