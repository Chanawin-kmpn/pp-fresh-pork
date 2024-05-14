import React from "react";

function Main({ children }) {
  return (
    <main className="flex bg-white rounded-lg mx-20 px-20 py-16  min-h-[1498px]">
      {children}
    </main>
  );
}

export default Main;
