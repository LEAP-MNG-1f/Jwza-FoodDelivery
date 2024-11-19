import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MinusIcon } from "@/svg/MinusIcon";
import { Addicon } from "@/svg/AddIcon";
import { FoodType } from "../HomePage/BodyHomePage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const OrderView = ({ img_url, name, ingredient, price }: FoodType) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BootstrapDialog
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: 538,
          },
        }}
        fullWidth={true}
        onClose={handleClose}
        // aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="!w-full !h-[230px] flex gap-4  p-4">
          <img className="w-[245px]" src={img_url} alt="" />
          <div className="!w-[384px]">
            <IconButton
              className="!p-0 !left-[65px]"
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <div className="w-[245px] flex flex-col gap-8 mt-7">
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
                <button>
                  <MinusIcon />
                </button>
                <button>
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
