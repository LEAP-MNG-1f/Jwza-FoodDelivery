import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Link from "next/link";
import { useCategorizedFoodContext } from "../context/CategorizedFoodsContext";

export default function CheckOutButton({
  open,
  setOpen,
  isFilled,
}: {
  open: boolean;
  setOpen: (_value: boolean) => void;
  isFilled: boolean;
}) {
  const handleClose = () => {
    setOpen(false);
    setCartFoods([]);
  };

  const { setCartFoods } = useCategorizedFoodContext();

  return (
    <div>
      <Button
        className={`!w-[187px] !h-[48px] !rounded-1 !text-[16px] !font-[400] !leading-[19.09px] !px-4 !py-2 !flex !justify-center !items-center !border-none ${
          isFilled
            ? "!bg-[#18BA51] !text-white"
            : "!bg-[#EEEFF2] !text-[#1C20243D]"
        }`}
        type="submit"
        variant="outlined"
        // sx={{
        //   backgroundColor: "#EEEFF2",
        //   color: "#1C20243D",
        //   "&:hover": {
        //     backgroundColor: "#18BA51",
        //     color: "white",
        //   },
        // }}
        disabled={!isFilled}
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
