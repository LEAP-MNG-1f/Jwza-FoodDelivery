"use client";
import { CloseIcon } from "@/svg/CloseIcon";
import { PlusIconAdmin } from "@/svg/PlusIconAdmin";
import { Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useFoodContext } from "../context/DataContext";

export default function CreateCategoryButton() {
  const { newCategory, createNewCategory, setCategories } = useFoodContext();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {};

  const addCategory = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ newCategory }),
      };
      const response = await fetch(
        `${BACKEND_ENDPOINT}/api/categories`,
        options
      );
      const data = await response.json();
      if (data?.success) {
        setCategories((prevCategories) => [...prevCategories, ...data?.data]);
      }

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="!w-[402px] !px-4 !py-2 !text-[18px] !font-[500] !leading-[27px] !flex !gap-2 !text-[#5E6166] !border !border-[#D6D8DB] !rounded-lg"
      >
        <PlusIconAdmin />
        <p>Create new category</p>
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="flex gap-[100px] items-center px-6 py-4">
          <IconButton className="!p-0" aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <p className="text-[24px] font-[700] leading-[31.2px]">
            Create new category
          </p>
        </div>
        <DialogContent className="!w-[587px] !px-6 !py-6 !border-y !border-y-[#E0E0E0]">
          <DialogContentText className="!text-[14px] !font-[500] !leading-[19.6px]">
            Category name
          </DialogContentText>
          <input
            onChange={createNewCategory}
            className="w-full rounded-lg px-3 py-4 bg-[#F4F4F4] mt-2"
            type="text"
            placeholder="Placeholder"
          />
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
            onClick={addCategory}
            autoFocus
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
