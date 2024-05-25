import React from "react";
import "../main.css";
function Main({ children }) {
  return (
    <main className="main-bg flex flex-col items-center bg-white px-4 py-8 min-h-[401px] lg:flex-row lg:justify-center lg:min-h-[1498px] lg:rounded-lg lg:mx-20 lg:px-20 lg:py-16">
      {children}
    </main>
  );
}

export default Main;
