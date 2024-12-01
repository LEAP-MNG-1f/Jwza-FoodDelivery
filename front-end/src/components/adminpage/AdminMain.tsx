import { ThreeDotsIcon } from "@/svg/ThreeDotsIcon";
import CreateCategoryButton from "./CreateCategoryButton";
import CreateFoodButton from "./CreateFoodButton";
import { CategoryType, FilteredItems, TFoods, TMenuProps } from "../ui/Types";

export type TCreateNewCategory = {
  createNewCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newCategory: string;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
};

export type AdminMainProps = {
  categories: CategoryType[];
  categorizedFoods: FilteredItems[];
  // setSelectedCategory: () => React.Dispatch<React.SetStateAction<string>>;
  handleSelectedCategory: (catgeory: string) => void;
  selectedCategory: string;
  createNewCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newCategory: string;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
};

export const AdminMain = ({
  selectedCategory,
  categorizedFoods,
  categories,
  handleSelectedCategory,
  createNewCategory,
  newCategory,
  setCategories,
}: AdminMainProps) => {
  return (
    <div className="w-full flex justify-center mt-[120px] mb-[300px]">
      <div className="w-[1200px] flex gap-8">
        <div className="w-[402px] flex flex-col gap-[40px]">
          <p className="text-[22px] font-[700] leading-[33px]">Food Menu</p>
          <div className="flex flex-col gap-[26px]">
            <div className="flex flex-col gap-[10px]">
              {categories?.map((category) => {
                return (
                  <div
                    key={category._id}
                    className={`flex justify-between px-4 py-2 border border-[#D6D8DB] rounded-lg ${
                      category?.name === selectedCategory
                        ? "!bg-[#18BA51] !text-white"
                        : "!bg-white !text-black "
                    }`}
                  >
                    <button
                      onClick={() => {
                        handleSelectedCategory(category?.name);
                      }}
                      className={`text-[18px] font-[500] leading-[27px]  `}
                    >
                      {category.name}
                    </button>
                    <ThreeDotsIcon />
                  </div>
                );
              })}
            </div>
            <CreateCategoryButton
              createNewCategory={createNewCategory}
              newCategory={newCategory}
              setCategories={setCategories}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="flex justify-between py-4 w-[894px]">
            <p className="text-[22px] font-[700] leading-[33px]">
              {selectedCategory}
            </p>
            <CreateFoodButton />
          </div>
          <div className="grid grid-cols-3 justify-between">
            {categorizedFoods?.map((food) => {
              return (
                <div key={food?._id} className="relative w-[282px]">
                  <button className=" w-[166px] h-[40px] px-16 py-2 rounded-[100px] text-[20px] font-[590] leading-[23.87px] bg-white right-[58px] top-[73px]">
                    Edit
                  </button>
                  <button className=" w-[282px] h-[256px] flex flex-col gap-[14px] border-none items-start">
                    <img
                      className="!w-[282px] !h-[186px] !rounded-[16px]"
                      src={food?.image}
                    />

                    <div className="!flex !flex-col !gap-1 !items-start">
                      <p className="!text-[18px] !font-[600] !leading-[27px] !text-black">
                        {food?.name}
                      </p>
                      <p className="!text-[18px] !font-[600] !leading-[27px] !text-[#18BA51] ">
                        {food?.price}₮
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
