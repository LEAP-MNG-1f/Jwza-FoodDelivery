import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Link from "next/link";
import { useCategorizedFoodContext } from "../context/CategorizedFoodsContext";

export default function CheckOutButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCartFoods([]);
  };

  const { setCartFoods } = useCategorizedFoodContext();
  return (
    <div>
      <Button
        className="!w-[187px] !h-[48px] !rounded-1 !text-[16px] !font-[400] !leading-[19.09px] !bg-[#EEEFF2] !text-[#1C20243D] !px-4 !py-2 !flex !justify-center !items-center !border-none"
        type="submit"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Захиалах
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            width: 681,
            height: 200,
          },
        }}
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="!text-[25px] !font-[500]  "
          >
            Захиалга амжилттай боллоо.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            href={"./"}
            onClick={handleClose}
            className="text-[15px] font-[700] rounded-[12px] bg-[#18BA51] px-5 py-3 text-white"
          >
            Нүүр хуудас руу буцах
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
