// import * as React from "react";
import { CloseIcon } from "@/svg/CloseIcon";
import { PlusIconAdmin } from "@/svg/PlusIconAdmin";
import { Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function CreateFoodButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        // variant="outlined"
        onClick={handleClickOpen}
        className="!w-[130px] !px-4 !py-2 !text-[11px] !font-[400] !leading-[19.09px] !flex !gap-2 !bg-[#18BA51] !text-white  !border !border-[#D6D8DB] !rounded-[4px]"
      >
        Add new food
      </Button>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            maxWidth: 587,
          },
        }}
        open={open}
        onClose={handleClose}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        <div className="flex gap-[100px] items-center px-6 py-4">
          <IconButton className="!p-0" aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <p className="text-[24px] font-[700] leading-[31.2px]">Create food</p>
        </div>
        <DialogContent className="!w-[587px] !px-6 !py-6 !border-y !border-y-[#E0E0E0] !gap-6">
          <div className="flex flex-col">
            <DialogContentText className="!text-[14px] !font-[500] !leading-[19.6px]">
              Хоолны нэр
            </DialogContentText>
            <input
              className="w-full rounded-lg px-3 py-4 bg-[#F4F4F4] mt-2"
              type="text"
              placeholder="Placeholder"
            />
          </div>
          <div className="flex flex-col mt-4">
            <DialogContentText className="!text-[14px] !font-[500] !leading-[19.6px]">
              Хоолны ангилал
            </DialogContentText>
            <input
              className="w-full rounded-lg px-3 py-4 bg-[#F4F4F4] mt-2"
              type="text"
              placeholder="Placeholder"
            />
          </div>
          <div className="flex flex-col mt-4">
            <DialogContentText className="!text-[14px] !font-[500] !leading-[19.6px]">
              Хоолны орц
            </DialogContentText>
            <input
              className="w-full rounded-lg px-3 py-4 bg-[#F4F4F4] mt-2"
              type="text"
              placeholder="Placeholder"
            />
          </div>
          <div className="flex flex-col mt-4">
            <DialogContentText className="!text-[14px] !font-[500] !leading-[19.6px]">
              Хоолны үнэ
            </DialogContentText>
            <input
              className="w-full rounded-lg px-3 py-4 bg-[#F4F4F4] mt-2"
              type="text"
              placeholder="Placeholder"
            />
          </div>
          <div className="flex flex-col mt-4">
            <DialogContentText className="!text-[14px] !font-[500] !leading-[19.6px]">
              Хоолны зураг
            </DialogContentText>
            <input
              className="w-full rounded-lg px-3 py-4 bg-[#F4F4F4] mt-2"
              type="text"
              placeholder="Placeholder"
            />
          </div>
        </DialogContent>
        <DialogActions className="!p-6">
          <Button
            className="!px-1 !text-[#3F4145] !text-[16px] !font-[700] !leading-[20px]"
            onClick={handleClose}
          >
            Clear
          </Button>
          <Button
            className="!px-4 !py-[10px] !text-[16px] !font-[700] !leading-[20px] !rounded-[4px] !bg-[#393939] !text-[#FFFFFF]"
            onClick={handleClose}
            autoFocus
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
