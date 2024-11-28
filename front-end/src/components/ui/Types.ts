export type FoodType = {
  _id?: string;
  name: string;
  image: string;
  ingredient?: string;
  price: number;
};
export type FoodsArrayProps = {
  foods: FoodType[];
};

export type CategoryType = {
  _id?: string;
  name: string;
};

export type FilteredObject = {
  _id: string;
  items: FilteredItems[];
};

export type FilteredItems = {
  catgeory: CategoryType;
  categoryId: string;
  image: string;
  ingredient: string;
  name: string;
  price: number;
  _id: string;
};

export type THomePage = {
  foodsData: FilteredObject[];
  item: FilteredItems;
};

export type TMenuPage = {
  foods: FoodType[];
  categories: CategoryType[];
  setSelectedCategory: () => void;
  handleSelectedCategory: (catgeory: string) => void;
  categorizedFoods: FilteredItems[];
  selectedCategory: string;
};
