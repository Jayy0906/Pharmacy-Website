import React from "react";
import AnimatedPage from "./AnimatedPage";

const NotFound = () => {
  return (
    <AnimatedPage>
      <div className="p-6">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="mt-4">Welcome to the Not Found page.</p>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
