import React from "react";
import "../main.css";
function Main({ children }) {
  return (
    <main className="main-bg flex bg-white rounded-lg mx-20 px-20 py-16  min-h-[1498px] ">
      {children}
    </main>
  );
}

export default Main;
