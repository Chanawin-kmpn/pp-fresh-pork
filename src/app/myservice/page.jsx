"use client";

import React from "react";
import CertificationModal from "../components/CertificationModal";

function Service() {
  return (
    <div className="container flex flex-col gap-16 mx-auto">
      <div className="flex gap-4">
        <div className="flex-1">
          <img
            className="rounded-md"
            src="https://fakeimg.pl/544x468/"
            alt=""
          />
        </div>
        <div className="flex-1  bg-white p-4">
          <h4 className="text-h4 font-bold text-primary mb-4">บริการของเรา</h4>
          <p className="text-nm text-gray2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            nulla aut? Commodi excepturi libero dicta officiis deserunt quidem
            laudantium odio, magnam accusamus deleniti recusandae voluptatum
            perspiciatis, rem vero similique suscipit.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-white p-4">
        <div>
          <h4 className="text-h4 font-bold text-primary mb-4">
            ใบรับรองของบริษัท
          </h4>
          <p className="text-nm text-gray2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            expedita magni laudantium facere aliquid, quasi totam. Voluptatum
            debitis labore, magnam, hic quod ea aspernatur quo obcaecati, modi
            iste harum nihil!
          </p>
        </div>
        <CertificationModal />
      </div>
    </div>
  );
}

export default Service;
