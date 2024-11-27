export type FoodType = {
  _id?: string;
  name: string;
  image: string;
  ingredient?: string;
  price: number;
  categoryId?: CategoryType;
};

export type CategoryType = {
  name: string;
  _id: string;
};

export type FoodsArrayProps = {
  foods: FoodType[];
  breakfast: FoodType[];
};

// export type CategoriesArrayProps = {
//   categories: CategoryType[];
// };
