import { Button } from "@mui/material";
import { useState } from "react";
function SliderFunc() {
  const dataArr = [
    {
      id: "1",
      heading: "Make more time for the work that matters most",
      dres: "Best software platform for running an internet business.",
      images: "/boy.png",
    },
    {
      id: "1",
      heading: "Build more time for the work that matters most",
      dres: "Best software platform for running an internet business.",
      images: "/hero1.png",
    },
    {
      id: "1",
      heading: "Take more time for the work that matters most",
      dres: "Best software platform for running an internet business.",
      images: "/bags.png",
    },
  ];

  const [curIdx, setCurIdx] = useState(0);
  const prevSlide = () => {
    setCurIdx((prev) => (prev === 0 ? dataArr.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurIdx((prev) => (prev === dataArr.length - 1 ? 0 : prev + 1));
  };
  let {heading, dres, images} = dataArr[curIdx]
  return (
    <>
      <div>
        <div className="grid grid-cols-12 container mx-auto lg:py-20 py-8">
          <div className="col-span-12 lg:col-span-6 md:p-8 p-4 lg:space-y-6 space-y-2">
            <img src="/logo.png" alt="" />
            <h1 className="text-5xl font-semibold ">
              {heading}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
                {dres}
            </p>
            <div className="flex items-center gap-4 md:text-lg text-sm font-semibold ">
              <Button variant="contained" onClick={prevSlide}>
                Left
              </Button>
              <Button variant="contained" onClick={nextSlide}>
                Right
              </Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 md:p-8 p-4 flex lg:items-end lg:justify-end items-center justify-center">
            <img className="h-96" src= {images} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default SliderFunc;
