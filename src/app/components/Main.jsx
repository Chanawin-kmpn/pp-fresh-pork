import React from "react";

function Main({ children }) {
  return (
    <main className="w-full bg-white mx-auto px-40  min-h-[1060px]">
      {children}
    </main>
  );
}

export default Main;
