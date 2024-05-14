import React from "react";

function Main({ children }) {
  return (
    <main className="bg-white rounded-lg mx-20 px-20 py-16  min-h-[1060px]">
      {children}
    </main>
  );
}

export default Main;
