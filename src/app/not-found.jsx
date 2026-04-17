import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col text-center items-center justify-center space-y-6">
      <h2 className="text-4xl font-bold text-black">Page Not Found</h2>
      <p>error: <span className="text-xl text-gray-500">404</span></p>
      <Link href={"/"}>
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;