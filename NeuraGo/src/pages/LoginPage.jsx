import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Login</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg w-80">
        <input type="text" placeholder="Email" className="w-full mb-4 p-3 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-3 border rounded-md" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
