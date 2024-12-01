import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MinusIcon } from "@/svg/MinusIcon";
import { Addicon } from "@/svg/AddIcon";
import { FoodType } from "../ui/Types";
import { useFoodContext } from "../context/DataContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const FoodCard = ({ _id, image, name, price, ingredient }: FoodType) => {
  console.log(ingredient);

  const { quantity, increaseQuantity, decreaseQuantity } = useFoodContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="!w-[282px] !h-[256px] !flex !flex-col !gap-[14px] !border-none !items-start !p-0"
      >
        <img
          className="!w-[282px] !h-[186px] !rounded-[16px]"
          src={image}
          alt=""
        />

        <div className="!flex !flex-col !gap-1 !items-start">
          <p className="!text-[18px] !font-[600] !leading-[27px] !text-black">
            {name}
          </p>
          <p className="!text-[18px] !font-[600] !leading-[27px] !text-[#18BA51] ">
            {price}₮
          </p>
        </div>
      </Button>
      <BootstrapDialog
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            maxWidth: 981,
          },
        }}
        fullWidth={true}
        onClose={handleClose}
        // aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="!w-[981px] h-[564px] flex gap-[33px] !rounded-[16px] p-8">
          <img className="w-[500px]" src={image} alt="" />
          <div className="!w-[384px]">
            <IconButton
              className="!p-0 !left-[365px]"
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <div className="flex flex-col gap-8 mt-7">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[28px] font-[700] leading-[33.41px]">
                  {name}
                </p>
                <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                  {price}₮
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[18px] font-[600] leading-[27px]">Орц</p>
                <p className="text-[16px] font-[400] leading-[19.09px] bg-[#F6F6F6] p-2 rounded-lg">
                  {ingredient}
                </p>
              </div>

              <p className="text-[18px] font-[600] leading-[27px]">Тоо</p>
              <div className="flex justify-between">
                <button onClick={decreaseQuantity}>
                  <MinusIcon />
                </button>
                <p>{quantity}</p>
                <button onClick={increaseQuantity}>
                  <Addicon />
                </button>
              </div>
              <button className="w-full h-[48px] bg-[#18BA51] py-2 px-4 text-[16px] font-[400] leading-[19.09px] rounded-[4px] text-white text-center">
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};
