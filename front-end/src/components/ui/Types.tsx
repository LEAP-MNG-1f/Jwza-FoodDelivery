export type FoodType = {
  _id?: string;
  name: string;
  image: string;
  ingredient?: string;
  price: number;
};

export type CategoryType = {
  name: string;
};

export type FoodsArrayProps = {
  foods: FoodType[];
};

// export type CategoriesArrayProps = {
//   categories: CategoryType[];
// };