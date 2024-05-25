import React from "react";
function Aboutpage() {
  return (
    <div className="container mx-auto flex flex-col gap-4 lg:gap-16">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-2">
        <div className="flex-1">
          <img
            className="mr-auto rounded-md"
            src="https://fakeimg.pl/544x468/"
            alt=""
          />
        </div>
        <div className="flex-1 bg-white rounded-md p-2 lg:p-4">
          <h4 className="text-h4 font-bold text-primary mb-2 lg:mb-4">
            ประวัติของบริษัท
          </h4>
          <p className="text-sm lg:text-nm text-gray2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            placeat possimus pariatur amet quisquam vitae repellat sed delectus
            obcaecati architecto? Vero debitis ullam libero accusamus maiores,
            vitae quam animi minus.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <div className="flex-1 bg-white rounded-md p-2 lg:p-4">
          <h4 className="text-h4 font-bold text-primary mb-2 lg:mb-4">
            ประวัติของบริษัท
          </h4>
          <p className="text-sm lg:text-nm text-gray2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            eum ducimus tempore ex maxime iste vero, a totam magnam possimus
            nulla soluta dolorum eius eveniet. Non minima facere tempore eius!
          </p>
        </div>
        <div className="flex-1">
          <img
            className="ml-auto rounded-md"
            src="https://fakeimg.pl/544x468/"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
