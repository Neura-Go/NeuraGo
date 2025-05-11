import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">NeuraGo</h1>
      <p className="text-lg text-gray-600 mb-4">Empowering UMKM with AI</p>
      <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">Get Started</a>
    </div>
  );
}

export default LandingPage;
