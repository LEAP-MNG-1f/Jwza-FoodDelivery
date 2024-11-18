import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { BookIcon } from "@/svg/BookIcon";
import { ClockIcon } from "@/svg/ClockIcon";
import { IngredientIcon } from "@/svg/IngredientIcon";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 264.75,
  height: 155,
  borderRadius: 16,
  textAlign: "center",
  padding: 16,
  border: 1,
  borderColor: "#D6D8DB",
}));

export default function InfoCard() {
  return (
    <Stack
      className="!w-full !flex !justify-center mt-[120px] mb-[120px]"
      direction="row"
    >
      <Box className="!w-[1200px] !flex !justify-between">
        <DemoPaper
          className="!flex !flex-col !justify-center !gap-[15px]"
          square
        >
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <BookIcon />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-[700] leading-[27px]">
              Хүргэлтийн төлөв хянах
            </p>

            <p className="text-[14px] font-[400] leading-[16.71px] text-[#272727]">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </DemoPaper>
        <DemoPaper className="!flex flex-col justify-center gap-[15px]" square>
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <ClockIcon />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[18px] font-[700] leading-[27px]">
              Шуурхай хүргэлт
            </p>

            <p className="text-[14px] font-[400] leading-[16.71px] text-[#272727]">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </DemoPaper>
        <DemoPaper className="!flex flex-col justify-center gap-[15px]" square>
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <IngredientIcon />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[18px] font-[700] leading-[27px]">
              Эрүүл, баталгаат орц
            </p>

            <p className="text-[14px] font-[400] leading-[16.71px] text-[#272727]">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </DemoPaper>
        <DemoPaper className="!flex flex-col justify-center gap-[15px]" square>
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <BookIcon />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[18px] font-[700] leading-[27px]">
              Хоолны өргөн сонголт
            </p>

            <p className="text-[14px] font-[400] leading-[16.71px] text-[#272727]">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </DemoPaper>
      </Box>
    </Stack>
  );
}
