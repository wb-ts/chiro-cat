import React from "react";
import Header from "./header";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-900">
      <Header />
      {children}
    </div>
  );
}
