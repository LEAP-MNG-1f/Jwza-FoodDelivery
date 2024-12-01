export type FoodType = {
  _id?: string;
  name: string;
  image: string;
  ingredient?: string;
  price: number;
  quantity?: number;
  count?: number;
  increaseQuantity?: () => void;
  decreaseQuantity?: () => void;
};
export type FoodsArrayProps = {
  foods: FoodType[];
};

export type CategoryType = {
  _id?: string;
  name: string;
  _v?: number;
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
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  quantity: number;
};

export type TMenuPage = {
  foods: FoodType[];
  categories: CategoryType[];
  setSelectedCategory: () => void;
  handleSelectedCategory: (catgeory: string) => void;
  categorizedFoods: FilteredItems[];
  selectedCategory: string;
};

export type TFoods = {
  _id?: string;
  price: string;
  name: string;
  ingredient: string;
  image: string;
  _v?: number;
};
export type TCategoryId = {
  _id: string;
  name: string;
  _v?: number;
};

export type TMenuContext = TFoods & {
  categoryId: TCategoryId;
};

export type TMenuProps = {
  categories: CategoryType[];
  setSelectedCategory: () => void;
  handleSelectedCategory: (catgeory: string) => void;
  categorizedFoods: FilteredItems[];
  selectedCategory: string;
  createNewCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
