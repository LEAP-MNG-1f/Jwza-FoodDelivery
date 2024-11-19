import { FoodType } from "./BodyHomePage";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const FoodCard = ({ img_url, name, price }: FoodType) => {
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
          src={img_url}
          alt=""
        />

        <div className="!flex !flex-col !gap-1 !items-start">
          <p className="!text-[18px] !font-[600] !leading-[27px] !text-black">
            {name}
          </p>
          <p className="!text-[18px] !font-[600] !leading-[27px] !text-[#18BA51] ">
            {price}
          </p>
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="w-[981px] h-[564px] flex justify-between">
          <img
            className="w-[50%] p-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwcNFoNWXoJ4khYIgrYGc98xBxAbMZiz85Q&s"
            alt=""
          />
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </BootstrapDialog>
    </div>
  );
};
