import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    name: "dessert 8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXx7wMoMXa6NSuAeFVoJfVTHNm2MfO9NlC1w&s",
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
    price: 25000,
    categoryId: "674421b0bda2639d243e3cdf",
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllFoods = async (request, response) => {
  const groupedFood = await Food.aggregate([
    {
      $lookup: {
        from: "categories", // Assuming your categories collection is named 'categories'
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    { $unwind: "$category" },
    {
      $group: {
        _id: "$category.name",
        items: { $push: "$$ROOT" },
      },
    },
  ]);

  response.json({
    success: true,
    data: groupedFood,
  });
};

const getCategorizedFoods = async (request, response) => {
  const { selectedCategory } = request.query;
  const result = await Food.find().populate("categoryId");

  const categorizedFoods = result.filter((foods) => {
    if (foods?.categoryId.name === selectedCategory) {
      return foods;
    }
  });

  response.json({
    success: true,
    data: categorizedFoods,
  });
};

const deleteFood = async (request, response) => {
  const result = await Food.findByIdAndRemove({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};
const updateFood = async (request, response) => {
  const result = await Food.findByIdAndUpdate({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { getAllFoods, createFood, deleteFood, updateFood, getCategorizedFoods };
