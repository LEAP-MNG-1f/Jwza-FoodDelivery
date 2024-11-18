import { Typography } from "@mui/material";

export const HeroHomePage = () => {
  return (
    <div
      style={{
        background: "url('./HeroBgImage.png'), #18BA51",
      }}
      className="w-full h-[788px] flex justify-center"
    >
      <div className="w-[1200px] flex justify-between items-center">
        <div className="absolute flex flex-col  justify-center items-center gap-[23px] top-[276.65px]">
          <p className="text-[55px] font-[600] leading-[49.5px] w-[384px] text-white">
            Pinecone Food delivery
          </p>
          <p className="border border-white w-[383px]"></p>
          <p className="text-[22px] font-700 leading-[26.4px] w-[384px] text-white">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="absolute left-[1132px]">
          <img className="w-[588px] h-[438px]" src="./Herofood.png" alt="" />
        </div>
      </div>
    </div>
  );
};
